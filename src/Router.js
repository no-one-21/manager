//in this file we will be defining all the routes that a usr can visit!!
import React from 'react';
import {Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './Components/LoginForm';
import EmployeeList from './Components/EmployeeList';
import EmployeeCreate from './Components/EmployeeCreate';
import EmployeeEdit from './Components/EmployeeEdit';
const RouterComponent = () => {
    return(
        <Router>
            <Scene key="root" hideNavBar>
            <Scene key="auth">
                <Scene key="login" component={LoginForm} title="please Login" initial />
            </Scene>
            <Scene key="main">
                <Scene 
                rightTitle="Add"
                onRight={()=>Actions.employeecreate()}
                key="employeelist" 
                component={EmployeeList} 
                title='Employees' initial  />
                <Scene key="employeecreate" component={EmployeeCreate} title='Create Employee'/>
                <Scene key="employeeEdit" component={EmployeeEdit} title='Edit Employee' />
            </Scene>
            

            
            </Scene>

        </Router>
    );
};
//onRight is a callback which will run when ,a on right button is presses!!
export default RouterComponent;
//router is top level component inside our applicaation!
// scenes are placed inside this router component!!
// their should be always at least one scene as parent scene and rest others as its child scene with key = root~~