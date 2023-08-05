type AccountTypes = "Despesa" | "Receita" | "Ativo" | "Passivo" | "Patrimônio Líquido" | "Resultado";

interface AccountBase {
  code: string;
  name: string;
  type: AccountTypes;
  allowsEntries: boolean;
}

interface AccountEntity extends AccountBase {
  children: AccountEntity[];
  hasChildren: boolean;
  hasParent: boolean;
  parent?: Account;
  parentCodes: string[];
  type: AccountTypes;
}

type RequiredAccount = Required<Account>;