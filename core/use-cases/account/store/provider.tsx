import React, { useReducer, useEffect, useCallback } from "react";
import * as commands from "@/core/use-cases/account/commands";

import { reducer as accountReducer } from "./reducer";
import { AccountContext } from "./context";

/**
 * The Account Provider component.
 *
 */
export function AccountProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(accountReducer, []);

  const dispatchMemo = useCallback(
    (action: Action) => {
      dispatch(action);
    }, []
  );

  async function loadAccounts() {
    const accounts = await commands.loadFromAsyncStorage();

    console.log({
      type: "SET",
      payload: accounts,
    });

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