import {CHANGE_NAME,CHANGE_EMAIL,CHANGE_PHONE} from '../actions/changeInProfile';

const initialState={
    name: " M. Sheharyar Khan",
    email: "msheharyark786@gmail.com",
    phone : '3249472294',
    
};



const changeInProfile = (state = initialState, action) => {
    switch (action.type) {
          case CHANGE_NAME:       
            if(action.new_name!=state.name){
              
              //state.name="";
              state.name=action.new_name;
              
            }
            case CHANGE_EMAIL:
              if(action.new_email!=state.email){
                //console.log("state.email",state.email)
                //state.email="";
                state.email=action.new_email;
                //console.log("state.email",state.email)
              }
            case CHANGE_PHONE:
              if(action.new_phone!=state.phone){
                //state.phone="";
                state.phone=action.new_phone;
              }
            
            


          
      default:
        return state;
    }
  };

export default changeInProfile;