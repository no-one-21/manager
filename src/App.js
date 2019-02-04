import React, { Component} from 'react';
import { View ,Text} from 'react-native';
import { Provider} from 'react-redux';
import {createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './Components/LoginForm';
import ReduxThunk from 'redux-thunk';
import Router from './Router'
//redux tunk is itself called a middleware...
// to aplly middleware we need to import applymiddleware from redux
class App extends Component{

    componentWillMount(){
        const config = {
            apiKey: '',
            authDomain: '',
            databaseURL: '',
            projectId: '',
            storageBucket: '',
            messagingSenderId: ''
          };
          firebase.initializeApp(config);
        
    }


    render(){
        return(
            <Provider store={ createStore(reducers ,{} , applyMiddleware(ReduxThunk))}>
               <Router/>
            </Provider>
        );
    }
}
// applymiddleware is wired up usign createStore by passing as an argument
export default App;
