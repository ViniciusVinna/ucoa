/**
 * build a tree from a flat list of accounts
 *
 */

export function buildTree(accounts: AccountBase[]): AccountEntity[] {
  const accountMap = accounts.reduce((map, account) => {
    map.set(account.code, {
      ...account,
      children: [],
      hasParent: false,
      hasChildren: false,
      parentCodes: [], // Inicializa o array vazio para o campo parentCodes
    });
    return map;
  }, new Map<string, AccountEntity>());

  const rootAccounts = Array.from(accountMap.values()).reduce((roots, account) => {
    const parentCode = account.code.substring(0, account.code.lastIndexOf("."));
    const parent = accountMap.get(parentCode);
    const isRoot = !accountMap.has(parentCode);

    if (parent) {
      parent.children.push(account);
      parent.hasChildren = true;

      // Recupera o array de códigos dos pais do pai atual e adiciona o código atual
      account.parentCodes = [...parent.parentCodes, parent.code];
    }

    account.parent = parent || undefined;
    account.hasParent = !isRoot;

    return isRoot ? [...roots, account] : roots;
  }, [] as AccountEntity[]);

  return rootAccounts;
}