

// export const addEmployeeToCompany = (offices, emp) => {
//   const exoff = offices.find(
//     office => office.id === 1
//   );

//   let existingEmployee = exoff.employees.find(
//     employees => employees.id == 1
//   )
//   if (existingEmployee) {
//     exoff.employees = exoff.employees.map(employees => employees.id == 1 ? { id: exoff.employees.length + 1, firstName: emp.firstName, lastName: emp.lastName, avatar: '' } : employees)

//   }
//   else {
//     const s = exoff.employees.push({ id: exoff.employees.length + 1, firstName: emp.firstName, lastName: emp.lastName, avatar: '' });
//   }

//   return offices.map(office =>
//     office.id === 1 ?
//       { ...office, ...office.employees }
//       : { ...office }
//   );
// };

