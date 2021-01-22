import React, {useRef} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
  Platform,
  ImageBackground,
} from 'react-native';
import {  
    createAppContainer
    
  } from 'react-navigation';
  import {createStackNavigator} from 'react-navigation-stack';
  import CategoriesScreen from '../screens/CategoriesScreen';
  import {createDrawerNavigator} from 'react-navigation-drawer'
  
  import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
  import SecondTopScreen from './SecondTopScreen';
  import AboutUsScreen from '../screens/AboutUsScreen';
  import ReviewsScreen from '../screens/ReviewsScreen';
  import Colors from '../constants/Colors';
//mport MealsNavigator from '../navigation/MealsNavigator';





  const MenuNavigator = createStackNavigator(
    {
      // MealsNavigator: MealsNavigator,
      
      SecondTop:{
        screen:SecondTopScreen,
        navigationOptions: {
              title: "",
              headerShown: false,
            },

      },
      // Categories: {
      //   screen: CategoriesScreen,
      //   navigationOptions: {
      //     title: '',
      //     headerShown: false,
      //   },
      // },
      
    },
    {
      // initialRouteName: 'Categories',
      //defaultNavigationOptions: defaultStackNavOptions
    }
  );
  const ContactNavigator = createStackNavigator(
    {
        AboutUs: {
          screen: AboutUsScreen,
          navigationOptions: {
            title: "",
            headerShown: false,
          },
        }
      
    },
    {
      // initialRouteName: 'Categories',
     // defaultNavigationOptions: defaultStackNavOptions
    }
  );
  const ReviewsNavigator = createStackNavigator(
    {
        ReviewsScreen:{
          screen:ReviewsScreen,
          navigationOptions: {
            title: "",
            headerShown: false,
          },
        }
      
    },
    {
      // initialRouteName: 'Categories',
      //defaultNavigationOptions: defaultStackNavOptions
    }
  );


const ThreeTopNavigator = createMaterialTopTabNavigator( 
    {
      Menu: {
        screen: MenuNavigator,
        navigationOptions: {
          title:'Menu'
        }
      },
      Contact: {
        screen: ContactNavigator,
        navigationOptions: {
          title:'Contact',
        }
      },
      Reviews: {
        screen: ReviewsNavigator,
        navigationOptions: {
          title:'Reviews',
        }
      },
    },{
      tabBarOptions:{
        activeTintColor:Colors.accentColor,
        inactiveTintColor: Colors.themeColor,
        indicatorStyle: {
          backgroundColor: Colors.accentColor,
        }, 
        style: {
          height: 45,
          backgroundColor: Colors.primaryColor,
        },
        labelStyle: { fontSize: 14, fontWeight:"bold" },
        
      }
    });

const ThreeNavigator = createDrawerNavigator(
    {
      ThreeFavs:{
          screen: ThreeTopNavigator,
          navigationOptions: {
            drawerLockMode: 'locked-closed',
            //drawerLabel: 'Menu',
            // title: '',
            // headerShown: false,
            // headerMode: 'none'
          }
        }
    },
    {
      contentOptions: {
        //activeTintColor: Colors.accentColor,
        // labelStyle: {
        //   fontWeight:'bold'
        // }
      }
    }
);



export default createAppContainer(ThreeNavigator);
