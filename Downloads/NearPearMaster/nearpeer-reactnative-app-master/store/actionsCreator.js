import * as actions from './actionTypes';

export const bugAdded = description => {
  // console.log(description, '<-- description');
  return {
    type: actions.BUG_ADDED,
    payload: {
      description: description,
    },
  };
};

// export function bugAdded(description){
//     return {
//         type:actions.BUG_ADDED,
//         payload:{
//             description:"First Bug"
//         }
//     }
// };

export const bugRemoved = description => ({
  type: actions.BUG_REMOVED,
  payload: {
    id: 1,
  },
});
// export function bugRemoved(description){
//     return {
// type:actions.BUG_REMOVED,
// payload:{
//  id:1
// }
//     }
// }

export const updateAuthStatus = status => {
  // console.log('status->', status);
  return {type: 'UPDATE_AUTH_STATUS', payload: status};
};
