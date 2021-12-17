
import { addEmployeeToCompany, addNewCompany, deleteCompanyRecord, removeEmployeeFromCompany } from "./office.utils";

const INITIAL_STATE = {

  offices: [
    {
      id: 1,
      company: 'comp00231',
      telephone: '0000',
      email: '1@1.com',
      location: 'durban',
      capacity: 10,
      employees: [{ id: 1, firstName: 'user 1', lastName: 'test' },
      { id: 2, firstName: 'user 2', lastName: 'senor', avatar: 4 },]
    },
    {
      id: 2,
      company: 'comp2',
      telephone: '0000',
      email: '1@1.com',
      location: 'durban',
      capacity: 10,
      employees: [{ id: 1, firstName: 'geremi', lastName: 'user 43' },
      { id: 2, firstName: 'user 2', lastName: '', avatar: 4 },]
    }
  ],

};



const officeReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case "fetchData":
      return {

        ...state,
        offices: action.payload

      };
    case "newEmployee":
      return {
        ...state,
        offices: addEmployeeToCompany(state.offices, action.payload)
      };
    case "removeEmployee":
      return {
        ...state,
        offices: removeEmployeeFromCompany(state.offices, action.payload)
      };
    case "newCompany":
      return {
        ...state,
        offices: addNewCompany(state.offices, action.payload)

      };
    case "removeCompany":
      return {
        ...state,
        offices: deleteCompanyRecord(state.offices, action.payload)

      };
    default:
      return state;
  }
};

export default officeReducer;

