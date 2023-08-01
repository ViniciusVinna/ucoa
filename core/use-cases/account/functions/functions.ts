/**
 * Converts an account service to entity account
 * @param account
 * @returns
 */

/**
 * checks if an account allows entries
 *
 */
export const accountAllowsEntries = (account: AccountBase): boolean => account.allowsEntries;

/**
 *
 * @param parent
 * @param child
 * @returns
 */
export const isSameTypeAsParent = (parent: AccountBase, child: AccountBase): boolean => parent.type === child.type;


/**
 *
 * @param code
 * @returns
 */
export const isValidCode = (code: AccountBase["code"]): boolean => {
  const parts = code.split(".");
  return parts.every(part => {
    const number = parseInt(part, 10);
    return number >= 1 && number <= 999;
  });
};


/**
 *
 * @param code
 * @param accounts
 * @returns
 */
const isUniqueCode = (code: string, accounts: AccountBase[]): boolean => !accounts.some(account => account.code === code);


/**
 *
 * @param parentCode
 * @param accounts
 * @returns
 */
const suggestNextCode = (parentCode: string, accounts: AccountBase[]): string => {
  const children = accounts.filter(account => account.code.startsWith(parentCode));
  const maxChildCode = Math.max(...children.map(child => parseInt(child.code.split(".").pop() as string, 10)));
  return `${parentCode}.${maxChildCode + 1}`;
};

/**
 *
 * @param parent
 * @param name
 * @param type
 * @param allowsEntries
 * @param accounts
 * @returns
 */
export const createAccount = (parent: AccountBase, name: string, type: string, allowsEntries: boolean, accounts: AccountBase[]): AccountBase | null => {
  if (!isSameTypeAsParent(parent, { code: "", name, type, allowsEntries })) {
    throw new Error("A conta deve ser do mesmo tipo que seu pai");
  }
  if (allowsEntries && !accountAllowsEntries(parent)) {
    throw new Error("A conta que aceita lançamentos não pode ter filhas");
  }
  const code = suggestNextCode(parent.code, accounts);
  if (!isValidCode(code)) {
    throw new Error("O código sugerido é inválido");
  }
  if (!isUniqueCode(code, accounts)) {
    throw new Error("O código sugerido já está em uso");
  }
  return { code, name, type, allowsEntries };
};