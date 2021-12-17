import { createSelector } from 'reselect';

const selectOffice = state => state.office;


export const selectOfficeItems = createSelector(
  [selectOffice],
  office => office.offices
);



export const findOffice = officeID => createSelector(
  [selectOfficeItems],
  offices => (offices.find( ({id}) => id === officeID) )

);

export const selectEmployeeDetails = (empID,officeID) => createSelector(
  [findOffice(officeID)],
  office => (office.employees.find(   ({id}) => id == empID))
);
