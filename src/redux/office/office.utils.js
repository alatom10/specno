
import { firestore } from '../../firebase/firebase.utils';
import { v4 as uuidv4 } from 'uuid';


export const removeEmployeeFromCompany = (offices, emp) => {
    const exoff = offices.find(
        office => office.id === emp.compID
    );

    let existingEmployee = exoff.employees.find(
        employees => employees.id == emp.id
    )

    if (existingEmployee) {
        exoff.employees = exoff.employees.filter(employees => employees.id !== emp.id);
    }

    const userRef = firestore.collection('companies').doc(emp.compID).set(
        {
            ...exoff
        }
    );

    return offices.map(office =>
        office.id === emp.compID ?
            { ...office, ...office.employees }
            : { ...office }
    );
}

export const addEmployeeToCompany = (offices, emp) => {
    const exoff = offices.find(
        office => office.id === emp.compID
    );

    let existingEmployee = exoff.employees.find(
        employees => employees.id == emp.id
    )
    if (existingEmployee) {
        existingEmployee = { id: emp.id, firstName: emp.firstName, lastName: emp.lastName, avatar: emp.avatar }
        exoff.employees = exoff.employees.map(employees => employees.id == emp.id ? existingEmployee : employees)
    }
    else {
        if (exoff.employees.length >= exoff.capacity)
            throw new Error("capcity exceeded");

        existingEmployee = { id: exoff.employees.length + 1, firstName: emp.firstName, lastName: emp.lastName, avatar: emp.avatar }
        const s = exoff.employees.push(existingEmployee);
    }

    const userRef = firestore.collection('companies').doc(emp.compID).set(
        {
            ...exoff,
            employees: exoff.employees
        }
    );
    return offices.map(office =>
        office.id === emp.compID ?
            { ...office, ...office.employees }
            : { ...office }
    );


};


export const addNewCompany = (offices, newOffice) => {
    let newOF;
    const exoff = offices.find(
        office => office.id === newOffice.id
    );

    if (exoff) {
        const userRef = firestore.collection('companies').doc(newOffice.id).update(
            {
                companyName: newOffice.companyName,
                telephone: newOffice.telephone,
                email: newOffice.email,
                location: newOffice.location,
                capacity: newOffice.capacity,
                color: newOffice.color
            }
        );
        newOF = { ...newOffice }
    }
    else {
        newOF = { id: uuidv4(), employees: [], ...newOffice };
        const s = offices.push(newOF);
        const userRef = firestore.collection('companies').add(
            newOF
        );
    }
    return offices.map(office => office);
}

export const deleteCompanyRecord = (offices, officeID) => {

    firestore.collection('companies').doc(officeID).delete();
    return offices.filter(office => office.id !== officeID);

}
