
const INITIAL_STATE={
    name:'',
    phone:'',
    shift:''

};

export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case "EMPLOYEE_UPDATE":
        return {...state ,[action.payload.prop]:action.payload.value};
        case 'EMPLOYEE_CREATE':
        return INITIAL_STATE;
        case 'employee_save_success':
        return INITIAL_STATE;
        default:
        return state;
    }
}
// these square brackets is called an key interpolation!!
//this will be made at run time!!
