type accountTypes = "Despesa" | "Receita"

interface AccountBase {
  code: string;
  name: string;
  type: accountTypes;
  allowsEntries: boolean;
}

interface AccountEntity extends AccountBase {
  children: Account[];
  hasChildren: boolean;
  hasParent: boolean;
  parent?: Account;
  parentCodes: string[];
  type: AccountTypes;
}

type RequiredAccount = Required<Account>;