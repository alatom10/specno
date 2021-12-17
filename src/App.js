import React, { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Spinner from './components/loadingSpinner/spinner.component';
import { convertCollectionsToMap, firestore } from './firebase/firebase.utils';
import HomePage from './pages/homepage/homepage.component';
import ManageCompanyPage from './pages/management/manage-company.component';
import ManagePage from './pages/management/manage-office.component';
import { loadData } from './redux/office/office.actions';





  const App = () => {
  let unsubscribeFromAuth = null;
  const dispatch = useDispatch();

  useEffect(() => {
    const collectionRef = firestore.collection('companies');
    let dataMap
    let unsubscribe = null;
    unsubscribe = collectionRef.onSnapshot(async snapshot => {

       dataMap = convertCollectionsToMap(snapshot);
       dispatch(loadData(dataMap));


    })    
    
  }, []);

    return (
      <div>
        <Switch>
          <Suspense fallback={<Spinner />}>
           <Route exact path='/' component={HomePage} />
           
          <Route path='/manage-office/:id' component={ManagePage} />
          <Route path='/manage-company/:id' component={ManageCompanyPage} />
          {/* <ManagePage />
            </Route> */}
          </Suspense>

        </Switch>
      </div>


    );
  }
export default App;