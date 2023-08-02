import { scenarios } from "../../__data__";
import * as functions from "./commands";

describe("account/helpers", () => {
  describe("acountAllowsEntries", () => {
    test("acountAllowsEntries should return true for account that allows entries", () => {
      const notAllowedAccount = scenarios.stubs.accounts[0];
      const allowedAccount = scenarios.stubs.accounts[1];

      expect(functions.accountAllowsEntries(notAllowedAccount)).toBe(false);
      expect(functions.accountAllowsEntries(allowedAccount)).toBe(true);
    });
  });
});