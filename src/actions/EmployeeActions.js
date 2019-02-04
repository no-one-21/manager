import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
//making one action creator for handling all the updates!!
//giving props and value as objects to this action creator!!
 export const employeeUpdate=({prop,value})=>{
    return{
        type:'EMPLOYEE_UPDATE',
        payload:{prop,value}
    }
 };


 export const employeeCreate=({name,phone,shift})=>{
     const {currentUser} = firebase.auth();
     return(dispatch)=>{
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .push({name,phone,shift})
    .then(()=>{
        dispatch({type:'EMPLOYEE_CREATE'});
        Actions.pop({type:'reset'})});
     };
 };

 // we are returning an object that is action from this aaction creator!!
//firebase.auth() will return the id of the current user!!  

export const employeesFetch = () =>{
    const {currentUser}=firebase.auth();
    return(dispatch)=>{
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .on('value',snapshot=>{
             dispatch({type:'employee_fetch_success', 
             payload: snapshot.val()
            })
        })
    }
}

export const employeeSave =({name,phone,shift,uid})=>{
    const {currentUser}=firebase.auth();
    return(dispatch)=>{
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
        .set({name,phone,shift})
        .then(()=>{
            dispatch({type:"employee_save_success"})
            Actions.employeelist({type:'reset'})
        })
    }
};

export const employeeDelete= ({uid}) =>{
    const {currentUser}=firebase.auth();

    return()=>{
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
        .remove()
        .then(()=>{
            Actions.employeelist({type:'reset'})
        })
    }
}