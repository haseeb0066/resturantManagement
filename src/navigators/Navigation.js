import { color } from 'react-native-reanimated';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator  } from 'react-navigation-stack';
import Colors from '../constants/Colors';
import LoginScreen from '../screens/LoginScreen';
import SplashScreen from '../screens/SplashScreen';
import {createDrawerNavigator} from 'react-navigation-drawer';
import SignupScreen from '../screens/SignupScreen';

const MainNavigator = createDrawerNavigator(
    {
      SplashScreen: {
        screen: SplashScreen,
        navigationOptions: {
          title: '',
          headerShown: false,
        }},

        LoginScreen:{
          screen: LoginScreen,
          navigationOptions: {
          title: '',
          headerShown: false,
          headerMode: null
        }},
        
        SignupScreen:{
          screen: SignupScreen,
          navigationOptions: {
          title: '',
          headerShown: false,
          headerMode: null
        }},
      
  },
    {
      //initialRouteName:'MealsFavs',
      contentOptions: {
        //color:'White',
        activeTintColor: Colors.accentColor,
        iconContainerStyle: {
          opacity: 1,
        },
      },
      drawerBackgroundColor: Colors.primaryColor,
      drawerWidth:200,
    }
  );
  
  
  export default createAppContainer(MainNavigator);