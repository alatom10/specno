
export const loadData = dataMap => ({
  type: "fetchData",
  payload: dataMap
})
export const addEmployee = emp => ({
  type: "newEmployee",
  payload: emp
});

export const addCompany = company => ({
  type: "newCompany",
  payload: company
});

export const deleteCompany = officeID => ({
  type: 'removeCompany',
  payload: officeID
})

export const removeEmployee = company => ({
  type: "removeEmployee",
  payload: company
});

