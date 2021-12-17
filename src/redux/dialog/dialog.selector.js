import { createSelector } from 'reselect';

const selectDialog = state => state.dialog;

export const selectDialogHidden = createSelector(
  [selectDialog],
  dialog =>dialog.hidden
);

