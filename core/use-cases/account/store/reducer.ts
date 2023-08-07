import * as commands from "@/core/use-cases/account/commands";
import * as data from "@/core/use-cases/__data__";
import * as utilities from "@/core/use-cases/utilities";

/**
 * The reducer function for the account context.
 *
 * @param {AccountEntity[]} state The current state.
 * @param {Action} action The action to perform.
 * @returns {AccountEntity[]} The new state.
 */
export function reducer(
  state: AccountEntity[] =
    utilities.tree.buildTree(data.scenarios.stubs.accountsTree),
  action: Action
): AccountEntity[] {
  switch (action.type) {
    case "CREATE": {
      if (
        !commands
          .isCodeUnique(action.payload.code, state)
        || !commands
          .canHaveChildren(action.payload.parent!)
      ) {
        return state;
      }

      const newStateCreate = [...state, action.payload];
      commands.saveToAsyncStorage(newStateCreate);

      return newStateCreate;
    }

    case "READ": {
      return state.filter((account) => account.code === action.payload);
    }

    case "UPDATE": {
      const newStateUpdate = state.map((account) => account.code === action.payload.code ? action.payload : account);
      commands.saveToAsyncStorage(newStateUpdate);

      return newStateUpdate;
    }

    case "DELETE": {
      const newStateDelete = state.filter((account) => account.code !== action.payload);
      commands.saveToAsyncStorage(newStateDelete);

      return newStateDelete;
    }

    case "SET": {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}