import React, { createContext } from "react";

/**
 * Account context
 *
 */
export const AccountContext = createContext<
  {
    state: AccountEntity[];
    dispatch: React.Dispatch<Action>
  }
  | undefined
>(undefined);
