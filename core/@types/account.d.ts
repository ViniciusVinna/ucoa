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
  parent?: AccountEntity;
  parentCodes: string[];
  type: AccountTypes;
  siblings?: AccountEntity[];
}

/**
 * Actions that can be performed on the accounts state
 */
type Action =
  | { type: "CREATE"; payload: AccountEntity }
  | { type: "READ"; payload: string }
  | { type: "UPDATE"; payload: AccountEntity }
  | { type: "DELETE"; payload: string }
  | { type: "SET"; payload: AccountEntity[] };

type RequiredAccount = Required<Account>;