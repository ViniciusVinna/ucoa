type SetParentAccountAction = {
  type: AccountFormActionTypes.SET_PARENT_ACCOUNT;
  payload: AccountEntity;
}

type SetAccountTypeAction = {
  type: AccountFormActionTypes.SET_ACCOUNT_TYPE;
  payload: AccountTypes;
}

type SetAllowsEntriesAction = {
  type: AccountFormActionTypes.SET_ACCEPTS_TRANSACTIONS;
  payload: AccountEntity;
}

type SubmitFormAction = {
  type: AccountFormActionTypes.SUBMIT_FORM;
  payload: AccountBase;
}

type UpdateCodeAction = {
  type: AccountFormActionTypes.UPDATE_CODE;
  payload: AccountEntity;
}

type AccountFormAction =
  | SetAccountTypeAction
  | SetAllowsEntriesAction
  | SetParentAccountAction
  | SubmitFormAction
  | UpdateCodeAction;