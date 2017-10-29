import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Text } from 'react-native';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate'; 
import EmployeeEdit from './components/EmployeeEdit'; 

const RightButton = () => {
    return (
        <Text onPress={() => Actions.employeeCreate()} >Add</Text>
    );
};

const RouterComponent = () => {
  return (
    <Router>
        <Scene key="root" hideNavBar>
            <Scene key="auth">
                <Scene key="login" component={LoginForm} title="Login Form" initial />
            </Scene>
            <Scene key="main">
                    <Scene 
                        key="employeeList" 
                        component={EmployeeList} 
                        title="Employee Form" 
                        renderRightButton={RightButton}
                        initial
                    />
                    <Scene 
                        key="employeeCreate"
                        component={EmployeeCreate}
                        title="Create Employee" 
                    />
                    <Scene 
                        key="employeeEdit"
                        component={EmployeeEdit}
                        title="Edit Employee" 
                    />

            </Scene>
       </Scene>
    </Router>
  );
};

export default RouterComponent;
