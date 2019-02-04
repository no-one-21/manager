 const INITIAL_STATE={email : '' ,password : '',
 user:null, error:'',loading:false, };
//here we are providing that state, which was given there...
export default (state=INITIAL_STATE,action) =>{
    console.log(action);
    switch(action.type){
        case 'email_changed':
           return { ...state, email:action.payload };
        
        case 'password_changed':
        return {...state ,password: action.payload };

        case 'LOGIN_USER':
        return{ ...state, loading:true, error:'' }

        case 'LOGIN_USER_SUCCESS':
        return{ ...state, user:action.payload , error:'', loading:false,
                 email:'',password:'' };

        case 'LOGIN_USER_FAIL':
        return {...state, error:'Authentication Failed', password:'',loading:false,};
        default:
        return state;
    }
};
// when firs return of email_changed ran , a new object is made , in which all the data of present data is given , and email is updated and correspondingly state is updated

