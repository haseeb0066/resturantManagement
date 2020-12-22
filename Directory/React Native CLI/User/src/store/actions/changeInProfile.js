export const CHANGE_NAME= 'CHANGE_NAME';
export const CHANGE_PHONE= 'CHANGE_PHONE';
export const CHANGE_EMAIL= 'CHANGE_EMAIL';


export const change_name=(names)=>{
    return {type: CHANGE_NAME, new_name:names};
    //console.log(change)  
}
export const change_email=(emails)=>{
    return {type: CHANGE_EMAIL, new_email:emails};
    //console.log(change)  
}
export const change_phone=(phones)=>{
    return {type: CHANGE_PHONE, new_phone:phones};
    //console.log(change)  
}