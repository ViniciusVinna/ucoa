import { useContext } from "react";

import { AccountContext } from "../store/context";

/**
 * Use the Account context.
 *
 * @returns {Object} The state and dispatch function from the context.
 * @throws {Error} If the context is undefined.
 */
export function useAccount() {
  const context = useContext(AccountContext);

  if (context === undefined) {
    throw new Error("useAccount must be used within an AccountProvider");
  }

  return context;
}