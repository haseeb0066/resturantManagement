import React, {useRef} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
  Platform,
} from 'react-native';
// import HeaderImageScrollView, {
//   TriggeringView,
// } from 'react-native-image-header-scroll-view';

// import * as Animatable from 'react-native-animatable';
//import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
//import FontAwesome from 'react-native-vector-icons/FontAwesome';
//import MyNavigator from './MyNavigator';
import {  
  createAppContainer
  
} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import DineScreen from '../screens/DineScreen';
import Colors from '../constants/Colors';
import TandoorScreen from '../screens/TandoorScreen';
import ChineseScreen from '../screens/ChineseScreen';
import DealScreen from '../screens/DealScreen';
import DesiScreen from '../screens/DesiScreen';
import BbqScreen from '../screens/BbqScreen';
import HeaderIamge from '../components/HeaderImage';
import PaymentScreen from '../screens/PaymentScreen'
import HeaderImageScreen from '../screens/HeaderImageScreen';





    const defaultStackNavOption = {
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerTitleStyle: {
          fontWeight:'bold'
        },
        headerBackTitleStyle: {
          //fontFamily: 'open-sans'
        },
        headerTintColor: Platform.OS === 'android' ? Colors.themeColor : Colors.primaryColor,
        // headerBackground:() => (
        //   <Image
        //     //style={StyleSheet.absoluteFill}
        //     source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg' }}
        //   />
        // ),
        headerTitle: ''
      };
    const DealNavigator = createStackNavigator(
        {
           // Deal: DealScreen
            // Categories: {
            //     screen: CategoriesScreen
            //   },
            //HeaderIm: HeaderIamge,
            
            CategoryMeals: {
                screen: CategoryMealsScreen,
                navigationOptions: {
                  title: '',
                  headerShown: false,
                },
            },
            MealDetail:{
              screen:MealDetailScreen,
              navigationOptions: {
                title: '',
                headerShown: false,
              },
            },
           // Products:Products,
            // PaymentScreen: {
            //   screen:PaymentScreen,
            //   navigationOptions: {
            //     title: '',
            //     headerShown: false,
            //   },
            // }
            
            //Pakistani: PakistaniScreen,
          
          //MealDetail: MealDetailScreen
        },
        {
          //initialRouteName: 'Deal',
          //defaultNavigationOptions: defaultStackNavOption
        }
      );
      const DesiNavigator = createStackNavigator(
        {
          Desi: {
            screen: DesiScreen,
            navigationOptions: {
                  title: '',
                  headerShown: false,
                },
          },
          MealDetail:{
            screen:MealDetailScreen,
            navigationOptions: {
              title: '',
              headerShown: false,
            },
          },
          
            
          
          //MealDetail: MealDetailScreen
        },
        {
          //initialRouteName: 'Deal',
          defaultNavigationOptions: defaultStackNavOption
        }
      );
      
      const BbqNavigator = createStackNavigator(
        {
          Bbq: {
            screen:BbqScreen,
            navigationOptions: {
              title: '',
              headerShown: false,
            },
          },
          MealDetail:{
            screen:MealDetailScreen,
            navigationOptions: {
              title: '',
              headerShown: false,
            },
          },
         
          
        },
        {
          //initialRouteName: 'Deal',
          defaultNavigationOptions: defaultStackNavOption
        }
      );
      const ChineseNavigator = createStackNavigator(
        {
            Chinese: {
              screen: ChineseScreen,
              navigationOptions: {
                title: '',
                headerShown: false,
              },
            },
            MealDetail:{
              screen:MealDetailScreen,
              navigationOptions: {
                title: '',
                headerShown: false,
              },
            },
           
          
        },
        {
          //initialRouteName: 'Deal',
          defaultNavigationOptions: defaultStackNavOption
        }
      );
      const TandoorNavigator = createStackNavigator(
        {
            Tandoor: {
              screen: TandoorScreen,
              navigationOptions: {
                title: '',
                headerShown: false,
              },
            },
            MealDetail:{
              screen:MealDetailScreen,
              navigationOptions: {
                title: '',
                headerShown: false,
              },
            },
            
        },
        {
          //initialRouteName: 'Deal',
          //defaultNavigationOptions: defaultStackNavOption
        }
      );
      // const ShowHeaderNavigator=createStackNavigator({
      //   HeaderImageScreen:HeaderImageScreen,
        
      // });
        
      

      const ChooseNavigator = createMaterialTopTabNavigator(  
          {
            
            Deal: {
                screen: DealNavigator,
                navigationOptions: {
                  title:"Deals",
                  //headerTitle: () => <LogoTitle />,
                
                  
                  //tabBarIcon: tabInfo => {
                    // return <MaterialCommunityIcons name="account" size={24} color={tabInfo.tintColor} />;
                  //},
                  
                  // tabBarLabel:
                  //   Platform.OS === 'android' ? (
                  //     <Text style={{}}>Deals</Text>
                  //   ) : (
                  //     'Deal'
                  //   )
                }
              },
          Desi: {
            screen: DesiNavigator,
            navigationOptions: {
              title:"Pakistani"
            }
          },
          Bbq: {
            screen: BbqNavigator,
            navigationOptions: {
              title:"BBQ"
            }
          },
          Chinese: {
            screen: ChineseNavigator,
            navigationOptions: {
              title:"Chinese"
            }
          },
          Tandoor: {
            screen: TandoorNavigator,
            navigationOptions: {
              title:"Tandoor"
            }
          }
          
        },
        {  
          initialRouteName: 'Deal',
          tabBarOptions:{
            activeTintColor:Colors.accentColor,
            inactiveTintColor: Colors.themeColor,
            scrollEnabled: true,
            //swipeEnabled:true,
            indicatorStyle: {
              backgroundColor: Colors.accentColor,
            }, 
            
            labelStyle: { fontWeight:"bold", fontSize:15 },
            style: {
              height: 50,
              backgroundColor: Colors.primaryColor,
            },
            
          //   navigationOptions: {
          //     header: {
          //       visible: true,
          //     },
          //  },
            
          }
        }
        //} 
        
      );
    const MenuNavigator = createDrawerNavigator(
          {
            
            
           Favs:{
                screen: ChooseNavigator,
                navigationOptions: {
                  drawerLockMode: 'locked-closed',
                 //drawerLabel: 'Deal',
                  headerShown: false,
                  headerMode: 'none',
                  // style:{flex:2}
                }
                
              }
          },
    );
    // return (
    //     <View style={styles.HomeView}>
    //         <Text>Home Screen</Text>
    //     </View>
    // )
// }

// const styles = StyleSheet.create({
//     HomeView:{
//         justifyContent:'center',
//         fontSize:20
//     }
// })

export default createAppContainer(MenuNavigator);
