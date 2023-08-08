import { useCases } from "@/core";

export const initialState: AccountEntity = {
  code: "",
  name: "",
  type: useCases.accounts.constants.Dictionary.ASSET,
  parent: undefined,
  parentCodes: [],
  children: [],
  siblings: [],
  allowsEntries: false,
  hasParent: false,
  hasChildren: false,
};

export function accountFormReducer(formState = initialState, action: AccountFormAction) {
  const { state: accounts } = useCases.accounts.hooks.useAccount();

  const { type, payload } = action;

  switch (type) {
    case useCases.accounts.constants.FormEvents.SET_PARENT_ACCOUNT: {
      const childCode = useCases.accounts.commands.getNextChildCode((payload as AccountEntity), accounts);
      const newFormData = { ...formState, payload, code: childCode };

      return { ...formState, ...newFormData };
    }

    case useCases.accounts.constants.FormEvents.UPDATE_CODE: {
      const { payload: code } = action;
      const newFormData = { ...formState, code };

      return newFormData;
    }

    case useCases.accounts.constants.FormEvents.SET_ACCOUNT_TYPE: {
      const { payload: accountType } = action;
      const newFormData = { ...formState, accountType };

      return newFormData;
    }

    case useCases.accounts.constants.FormEvents.SET_ALLOW_ENTRIES: {
      const { payload: allowsEntries } = action;

      return { ...formState, allowsEntries };
    }

    case useCases.accounts.constants.FormEvents.SUBMIT_FORM: {
      if (!useCases.accounts.commands.isCodeUnique(payload as AccountEntity, accounts)) {
        return formState;
      }

      if (formState.allowsEntries && !useCases.accounts.commands.canHaveChildren(formState.parent!)) {
        return formState;
      }

      if (formState.code && formState.code
        .split(".")
        .map((part) => parseInt(part, 10))
        .filter((part) => part > 999)
        .length > 0
      ) {
        return formState;
      }

      if (formState.hasParent && formState.parent) {
        const parentChildrenCodes = accounts
          .filter((account) => account.parent?.code === formState.parent?.code)
          .map((account) => parseInt(account.code.split(".").pop()!, 10))
          .filter((code) => code === 999);

        if (parentChildrenCodes.length > 0) {
          const parentParts = formState.parent!.code.split(".");

          parentParts.pop();

          const newParentCode = parentParts.join(".");
          const newParentAccount = accounts.find((account) => account.code === newParentCode);

          if (newParentAccount) {
            const childCode = useCases.accounts.commands.getNextChildCode(newParentAccount, accounts);
            const newFormData = { ...formState, parent: newParentAccount, code: childCode };

            return { ...formState, formData: newFormData };
          }
        }
      }

      const newAccount = {
        code: formState.code,
        name: formState.name,
        type: formState.type,
        allowsEntries: formState.allowsEntries,
        parent: formState.parent?.code,
      } as AccountEntity;

      const newAccounts = [...accounts, newAccount];
      useCases.accounts.commands.saveToAsyncStorage(newAccounts);

      return { ...formState, ...initialState };
    }

    default:
      return formState;
  }
}
