import {createStore} from 'redux';
import reducer from './reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getUser} from './../common/commonMethods';
import * as actionCreator from './../store/actionsCreator';

const store = createStore(reducer);
getUser().then(res => {
    if(res != null){
    store.dispatch(actionCreator.updateAuthStatus(res));
}else{
    store.dispatch(actionCreator.updateAuthStatus(false));
}
});


export default store;