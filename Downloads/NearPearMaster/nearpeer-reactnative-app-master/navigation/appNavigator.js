import React, {useRef, useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import {
  Text,
  View,
  TouchableOpacity,
  BackHandler,
  Platform,Image
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {WebView, WebViewNavigation} from 'react-native-webview';
import { VideoPageScreenNavigator, WebViewScreenNavigator , TabScreenNavigator}  from './navigationCenter';
import { set } from 'react-native-reanimated';


const AppNavigator = props => {
  const isAuthenticated = useSelector(state=>state.isAuthenticated)
  const [loggedIn, setLoggedIn] = useState(false);
  
const loginStatus = async () => {
  
  let check = await AsyncStorage.getItem('LoggedIn')
  isAuthenticated
setLoggedIn(isAuthenticated);
  return loggedIn
}
  useEffect( () => {
    loginStatus();
    // setstateNavigation(navigationState.loading);

// return () => {
//   setResult(false); // This worked for me
// };



  }, []);

if(isAuthenticated){
  console.log("Authentication",isAuthenticated);
return <NavigationContainer>
    {/* <WebViewScreenNavigator /> */}
    <TabScreenNavigator  />
    {/* <VideoPageScreenNavigator />  */}
    </NavigationContainer>
  }
  else{
    console.log("ELSE Authentication",isAuthenticated);
    return <NavigationContainer>
    <WebViewScreenNavigator />
    {/* <TabScreenNavigator /> */}
    {/* <VideoPageScreenNavigator />  */}
    </NavigationContainer>
  }
}


export default AppNavigator;
