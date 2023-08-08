export enum Dictionary {
  ASSET = "Ativo",
  EQUITY = "Patrimônio Líquido",
  EXPENSE = "Despesa",
  LIABILITY = "Passivo",
  RESULT = "Resultado",
  REVENUE = "Receita",
}

export enum FormEvents {
  SET_ALLOW_ENTRIES = "SET_ALLOW_ENTRIES",
  SET_ACCOUNT_TYPE = "SET_ACCOUNT_TYPE",
  SET_PARENT_ACCOUNT = "SET_PARENT_ACCOUNT",
  SUBMIT_FORM = "SUBMIT_FORM",
  UPDATE_CODE = "UPDATE_CODE",
}

export enum Actions {
  CREATE = "CREATE",
  DELETE = "DELETE",
  READ = "READ",
  UPDATE = "UPDATE",
}

export const FormEventsKeys = Object.keys(FormEvents) as (keyof typeof FormEvents)[];