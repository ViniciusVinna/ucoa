import React, { useReducer } from "react";

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
    utilities.flatten.flattenTree(data.scenarios.stubs.accountsTree)
  );

  return (
    <AccountContext.Provider
      value={{
        state: state,
        dispatch: dispatch
      }}
    >
  { children }
  </AccountContext.Provider>
  );
}