import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Save the state to Async Storage.
 */
export async function saveToAsyncStorage(state: AccountEntity[]): Promise<void> {
  console.log("Accounts saved to Async Storage:", state);

  await AsyncStorage.setItem("accounts", JSON.stringify(state));
}

/**
 * Load the state from Async Storage.
 */
export async function loadFromAsyncStorage(): Promise<AccountEntity[]> {
  const accounts = await AsyncStorage.getItem("accounts");

  return accounts === null ? [] : JSON.parse(accounts);
}

/**
 * Get the next valid code for a child account based on the highest code found among its siblings.
 */
export function getNextChildCode(parentAccount: AccountEntity, accounts: AccountEntity[]): string {
  if (!parentAccount.code) {
    return "1";
  }

  const childrenCodes = accounts
    .filter((account) => account.parent?.code === parentAccount.code)
    .map((account) => parseInt(account.code.split(".").pop() || "0", 10));

  const maxChildCode = childrenCodes.length > 0 ? Math.max(...childrenCodes) : 0;

  const nextChildCode = maxChildCode + 1;

  return parentAccount.code + "." + nextChildCode;
}

/**
 * Check if the code is unique among the existing accounts.
 */
export function isCodeUnique(formData: AccountEntity, accounts: AccountEntity[]): boolean {
  const { code } = formData;

  return !accounts.some((account) => account.code === code);
}

/**
 * Check if the parent account can have children.
 */
export function canHaveChildren(parentAccount: AccountEntity): boolean {
  return parentAccount ? !parentAccount.allowsEntries : true;
}
