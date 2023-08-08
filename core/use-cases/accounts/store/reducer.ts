import * as commands from "@/core/use-cases/accounts/commands";
import * as constants from "@/core/use-cases/accounts/constants";
import { utilities, data } from "@/core/use-cases";

/**
 * The reducer function for the account context.
 *
 */
export function reducer(
  state: AccountEntity[] = data.scenarios.accountsTree,
  action: Action
): AccountEntity[] {
  const accounts = utilities.flatten.flattenTree(state);

  const { type, payload } = action;

  switch (type) {
    case constants.Actions.CREATE: {
      if (
        !commands.isCodeUnique(payload, accounts)
        || !commands.canHaveChildren(payload.parent!)
      ) {
        return accounts;
      }

      const newStateCreate = [...accounts, payload];
      commands.saveToAsyncStorage(newStateCreate);

      return newStateCreate;
    }

    case constants.Actions.READ: {
      return accounts.filter((account) => account.code === payload.code);
    }

    case constants.Actions.UPDATE: {
      const newStateUpdate =
        accounts.map(
          (account) =>
            account.code === payload.code ? payload : account
        );

      commands.saveToAsyncStorage(newStateUpdate);

      return newStateUpdate;
    }

    case constants.Actions.DELETE: {
      const newStateDelete = accounts.filter((account) => account.code !== payload.code);
      commands.saveToAsyncStorage(newStateDelete);

      return newStateDelete;
    }

    default: {
      return accounts;
    }
  }
}