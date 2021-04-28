import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './HomePage';
import AddPersonPage from './AddPersonPage';
import AddCarPage from './AddCarsPage';
import DeleteCarsPage from './DeleteCarsPage';
import Layout from './Layout';


const App = () => {
    return (
        <Layout>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/addperson' component={AddPersonPage} />
            <Route exact path='/addcar/:id' component={AddCarPage} />
            <Route exact path='/deleteCars/:id' component={DeleteCarsPage} />
        </Layout>
    )
}

export default App;
