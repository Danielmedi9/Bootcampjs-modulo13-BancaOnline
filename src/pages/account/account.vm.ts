export interface AccountVm {
  type: string;
  name: string;
}

export interface AccountError {
  type: string;
  name: string;
}

export const createEmptyAccountError = (): AccountError => ({
  type: "",
  name: "",
});

export const createEmptyAccountVm = (): AccountVm => ({
  type: "",
  name: "",
});
