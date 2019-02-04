
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';


export const emailChanged = (text) =>{
    return{
        type:'email_changed',
        payload: text
    };
};

export const passwordChanged=(text) =>{
    return{
        type: 'password_changed',
        payload:text
    };
};

// we are this function , in which these curly braces represent that we are calling this function with passing an argument as an object , which consists of email and password
export const loginUser=({email,password}) =>{
    return(dispatch)=>{
        dispatch({type:'LOGIN_USER',})
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(user =>loginUserSuccess(dispatch,user))
    .catch(()=>{
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(user=>loginUserSuccess(dispatch,user))
        .catch(()=>loginUserFail(dispatch));
    });
    };
};

const loginUserFail=(dispatch)=>{
    dispatch({
        type:'LOGIN_USER_FAIL',
    })
};

//thunk functions are called with dispatch!!

// we will use reux thunk to handle asynchronous action creators
//it can be used for any type for ajax request
// i am returning object that is why curly braces , if t would have been jsx , i would have returned small brackets

const loginUserSuccess=(dispatch,user)=>{
    dispatch({
        type:'LOGIN_USER_SUCCESS',
        payload:user
    })

    Actions.main();
}
// this employee list is coming from router file inside scene and the scene which has this key !! 
//dispatch jabhi chalega , jb .then success will complete!!
// jis action ke baad jo bhi screen dokhani hai , bas upko dispatch ya run karne ke baas
// Action.{us key ka naam } jisse wo routes file mein hai , aur scene ke andar key ka jo naa hai whi !!
