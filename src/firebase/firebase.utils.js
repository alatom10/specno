import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const config = {
  apiKey: "AIzaSyBXQZ-QopLnOY180RegC94yutFPnD1IaRs",
  authDomain: "specnooffice.firebaseapp.com",
  projectId: "specnooffice",
  storageBucket: "specnooffice.appspot.com",
  messagingSenderId: "388081634441",
  appId: "1:388081634441:web:587648bbc6964778ef4a58",
  measurementId: "G-R5MLY0QZSF"
};

firebase.initializeApp(config);

export const convertCollectionsToMap = collections =>{
  const newCollection = collections.docs.map(doc => {
    const {companyName,telephone, color, email, location, capacity, employees} = doc.data();

    return{
      id: doc.id,
      companyName,telephone, color, email, location, capacity, employees
    };
  });
  return newCollection;
}




export const firestore = firebase.firestore();


export default firebase;
