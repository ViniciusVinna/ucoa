import React, { useReducer, useEffect, useCallback } from "react";
import * as commands from "@/core/use-cases/account/commands";

import { AccountContext } from "./context";
import { data, utilities } from "@/core/use-cases";
import { reducer as accountReducer } from "./reducer";

/**
 * The Account Provider component.
 *
 */
export function AccountProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(
    accountReducer,
    utilities
      .flatten
        .flattenTree(data.scenarios.stubs.accountsTree)
  );

  const dispatchMemo = useCallback(
    (action: Action) => {
      dispatch(action);
    }, []
  );

  async function loadAccounts() {
    const accounts = await commands.loadFromAsyncStorage();

    if (accounts !== null) {
      dispatch({
        type: "SET",
        payload: accounts,
      });
    }
  }

  useEffect(
    () => {
      loadAccounts();
    },
    []
  );

  return (
    <AccountContext.Provider
      value={{
        state,
        dispatch: dispatchMemo
      }}
    >
  { children }
  </AccountContext.Provider>
  );
}