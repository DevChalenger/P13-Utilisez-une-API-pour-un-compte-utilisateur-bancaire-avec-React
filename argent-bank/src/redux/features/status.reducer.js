export const PENDING = "pending";
export const VOID = "void";
export const UPDATING = "updating";
export const RESOLVED = "resolved";
export const REJECTED = "rejected";

export const statusReducer = {
  pending: (draft) => {
    switch (draft.status) {
      case VOID:
        draft.status = PENDING;
        draft.loading = true;
        return;
      case REJECTED:
        draft.error = null;
        draft.status = PENDING;
        draft.loading = true;
        return;
      case RESOLVED:
        draft.status = UPDATING;
        draft.loading = true;
        return;
      default:
        return;
    }
  },

  resolved: (draft, action) => {
    switch (draft.status) {
      case PENDING || UPDATING:
        draft.data = action.payload;
        draft.status = RESOLVED;
        draft.loading = false;
        return;
      default:
        return;
    }
  },

  rejected: (draft, action) => {
    switch (draft.status) {
      case PENDING || UPDATING:
        draft.status = REJECTED;
        draft.error = action.payload;
        draft.data = null;
        draft.loading = false;
        return;
      default:
        return;
    }
  },
};
