import AsyncStorage from "@react-native-async-storage/async-storage";


/**
 * Save the state to Async Storage.
 *
 * @param {AccountEntity[]} state The state to save.
 */
export async function saveToAsyncStorage(state: AccountEntity[]) {
  await AsyncStorage.setItem(
    "accounts",
    JSON.stringify(state)
  );
}

/**
 *  Load the state from Async Storage.
 *
 * @returns
 */
export async function loadFromAsyncStorage(): Promise<AccountEntity[]> {
  const accounts = await AsyncStorage.getItem("accounts");

  return accounts === null
    ? []
    : JSON.parse(accounts);
}

/**
 * Suggest child code based on parent code and existing accounts.
 *
 * @param {string} parentCode The parent code.
 * @param {AccountEntity[]} accounts The existing accounts.
 * @returns {string} The suggested child code.
 */
export function suggestChildCode(parentCode: string, accounts: AccountEntity[]): string {
  const childAccounts = accounts
    .filter(account =>
      account.parentCodes.includes(parentCode)
    );

  const maxChildCode = Math
    .max(...childAccounts
      .map(account => Number(account.code.split(".").pop()))
    );

  return isNaN(maxChildCode)
    ? `${parentCode}.1`
    : `${parentCode}.${maxChildCode + 1}`;
}

/**
 * Check if the account can have children.
 *
 * @param {AccountEntity} account The account to check.
 * @returns {boolean} True if the account can have children, false otherwise.
 */
export function canHaveChildren(account: AccountEntity): boolean {
  return !account.allowsEntries;
}

/**
 * Check if the code is unique among the accounts.
 *
 * @param {string} code The code to check.
 * @param {AccountEntity[]} accounts The existing accounts.
 * @returns {boolean} True if the code is unique, false otherwise.
 */
export function isCodeUnique(code: string, accounts: AccountEntity[]): boolean {
  return !accounts.some(account => account.code === code);
}