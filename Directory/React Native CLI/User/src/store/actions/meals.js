export const TOGGLE_FAVORITE= 'TOGGLE_FAVORITE';
export const CATEGORY_ID= 'CATEGORY_ID';
export const CLEAR= 'CLEAR';
export const CATID_UPDATE= 'CATID_UPDATE';
// export const CHANGE_NAME= 'CHANGE_NAME';
// export const CHANGE_PHONE= 'CHANGE_PHONE';
// export const CHANGE_EMAIL= 'CHANGE_EMAIL';

export const toggleFavorite=(id)=>{
    return {type: TOGGLE_FAVORITE, mealId:id};  
}
export const category_id=(id)=>{
    return {type: CATEGORY_ID, categoryIds:id};
    //console.log(categoryIds)  
}
export const clear=(id)=>{
    return {type: CLEAR, change:id};
    //console.log(change)  
}

export const set_new_id=(cal)=>{
    return {type: SET_NEW_ID, new_Category_id:cal};
    //console.log(change)  
}
export const set_new_catid=(val)=>{
    return {type: CATID_UPDATE, new_Cat:val};
    //console.log(change)  
}
// export const change_name=(names)=>{
//     return {type: CHANGE_NAME, new_name:names};
//     //console.log(change)  
// }
// export const change_email=(emails)=>{
//     return {type: CHANGE_EMAIL, new_email:emails};
//     //console.log(change)  
// }
// export const change_phone=(phones)=>{
//     return {type: CHANGE_PHONE, new_phone:phones};
//     //console.log(change)  
// }