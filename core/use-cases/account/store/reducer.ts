import * as commands from "@/core/use-cases/account/commands";
import { utilities, data } from "@/core/use-cases";

/**
 * The reducer function for the account context.
 *
 * @param {AccountEntity[]} state The current state.
 * @param {Action} action The action to perform.
 * @returns {AccountEntity[]} The new state.
 */
export function reducer(
  state: AccountEntity[] = data.scenarios.stubs.accountsTree,
  action: Action
): AccountEntity[] {
  const accounts = utilities.flatten.flattenTree(state);

  switch (action.type) {
    case "CREATE": {
      if (
        !commands.isCodeUnique(action.payload.code, accounts)
        || !commands.canHaveChildren(action.payload.parent!)
      ) {
        return accounts;
      }

      const newStateCreate = [...accounts, action.payload];
      commands.saveToAsyncStorage(newStateCreate);

      return newStateCreate;
    }

    case "READ": {
      return accounts.filter((account) => account.code === action.payload);
    }

    case "UPDATE": {
      const newStateUpdate =
        accounts.map(
          (account) =>
            account.code === action.payload.code ? action.payload : account
        );
      commands.saveToAsyncStorage(newStateUpdate);

      return newStateUpdate;
    }

    case "DELETE": {
      const newStateDelete = accounts.filter((account) => account.code !== action.payload);
      commands.saveToAsyncStorage(newStateDelete);

      return newStateDelete;
    }

    case "SET": {
      return action.payload;
    }

    default: {
      return accounts;
    }
  }
}