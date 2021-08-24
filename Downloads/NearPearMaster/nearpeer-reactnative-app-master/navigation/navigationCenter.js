import React, {useRef, useEffect, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  BackHandler,
  Platform,
  StyleSheet,
  Image,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {WebView, WebViewNavigation} from 'react-native-webview';
import {createStackNavigator} from '@react-navigation/stack';
// import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer'
import WebViewScreen from './../screens/webViewScreen';
import VideoPageScreen from './../screens/videoScreen';
import VideoListing from './../screens/videoListing';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export const TabStack = createBottomTabNavigator();

export const TabScreenNavigator = props => {
  return (
    <TabStack.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#E03249',
        inactiveTintColor: 'gray',
        inactiveBackgroundColor: 'transparent',
        showLabel: false,
        style: {
          borderTopColor: '#66666666',
          backgroundColor: 'transparent',
          elevation: 0,
          height: 60,
          justifyContent: 'center',
          alignContent: 'center',
          paddingBottom: 10,
        },
      }}>
      <TabStack.Screen
        name="Courses"
        component={WebViewScreenNavigator}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View style={styles.labelFocusedContainer}>
                {/* <HomeSelectedIcon height={24} width={24} /> */}
                <Image
                  source={require('./../assets/grad.png')}
                  style={styles.iconTab}
                />
                <Text style={styles.labelFocusedStyle}>Courses</Text>
              </View>
            ) : (
              <View style={styles.labelContainer}>
                {/* <HomeIcon height={24} width={24} /> */}
                <Image
                  source={require('./../assets/grad_gray.png')}
                  style={styles.iconTab}
                />
                <Text style={styles.labelStyle}>Courses</Text>
              </View>
            );
          },
        }}
      />
      {/* <TabStack.Screen
        name="VideoListing"
        component={VideoListing}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View style={styles.labelFocusedContainer}>
               <Image source={require('./../assets/IMG-20210712-WA0030.jpg')} style={{width:20,height:20}} />
                <Text style={styles.labelFocusedStyle} >Videos</Text>
              </View>
            ) : (
              <View style={styles.labelContainer}>
                               <Image source={require('./../assets/IMG-20210712-WA0030.jpg')} style={{width:20,height:20}} />
           
                <Text style={styles.labelStyle}>Videos</Text>
              </View>
            );
          },
        }}
      /> */}
      <TabStack.Screen
        name="Downloads"
        component={OfflineScreenNavigator}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View style={styles.labelFocusedContainer}>
                <Image
                  source={require('./../assets/download.png')}
                  style={{width: 20, height: 20}}
                />
                <Text style={styles.labelFocusedStyle}>Downloads</Text>
              </View>
            ) : (
              <View style={styles.labelContainer}>
                <Image
                  source={require('./../assets/download_gray.png')}
                  style={{width: 20, height: 20}}
                />
                {/* <HomeIcon height={24} width={24} /> */}
                <Text style={styles.labelStyle}>Downloads</Text>
              </View>
            );
          },
        }}
      />
      {/* <TabStack.Screen
        name="Offline"
        component={OfflineVideos}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View style={styles.labelFocusedContainer}>
                 <Image source={require('./../assets/IMG-20210712-WA0030.jpg')} style={{width:20,height:20}} />
                <Text style={styles.labelFocusedStyle}>Offline</Text>
              </View>
            ) : (
              <View style={styles.labelContainer}>
                               <Image source={require('./../assets/IMG-20210712-WA0030.jpg')} style={{width:20,height:20}} />
  
                <Text style={styles.labelStyle}>Offline</Text>
              </View>
            );
          },
        }}
      /> */}
    </TabStack.Navigator>
  );
};

const defaultNavOptions = {
  headerStyles: {
    backgroundColor: 'blue',
  },
  headerTintColor: 'blue',
};
export const WebViewScreenNavigator = () => {
  return (
    <WebViewStackNavigator.Navigator
      initialRouteName="WebViewScreen"
      screenOptions={defaultNavOptions}>
      <WebViewStackNavigator.Screen
        name="WebViewScreen"
        component={WebViewScreen}
        options={{
          headerMode: 'none',
          headerShown: false,
        }}
      />

      {/* <WebViewStackNavigator.Screen
        name="DownloadingScreen"
        component={DownloadScreen}
        options={{
          headerMode: 'none',
          headerShown: false,
        }}
      /> */}
    </WebViewStackNavigator.Navigator>
  );
};
const WebViewStackNavigator = createStackNavigator();

export const OfflineScreenNavigator = () => {
  return (
    <OfflineStackNavigator.Navigator
      initialRouteName="WebViewScreen"
      screenOptions={defaultNavOptions}>
      <OfflineStackNavigator.Screen
        name="VideoListing"
        component={VideoListing}
        options={{
          headerMode: 'none',
          headerShown: false,
        }}
      />
      <OfflineStackNavigator.Screen
        name="VideoPageScreen"
        component={VideoPageScreen}
        options={{
          headerMode: 'none',
          headerShown: false,
        }}
      />

      {/* <OfflineStackNavigator.Screen
        name="DownloadingScreen"
        component={DownloadScreen}
        options={{
          headerMode: 'none',
          headerShown: false,
        }}
      /> */}
    </OfflineStackNavigator.Navigator>
  );
};
const OfflineStackNavigator = createStackNavigator();

const styles = StyleSheet.create({
  labelContainer: {
    alignItems: 'center',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
  labelFocusedContainer: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    borderTopWidth: 3,
    borderTopColor: '#E03249',
    width: 100,
  },
  labelFocusedStyle: {
    textAlign: 'center',
    color: '#E03249',
    backgroundColor: 'transparent',
    fontWeight: '700',
    width: 100,
  },
  labelStyle: {
    textAlign: 'center',
    backgroundColor: 'transparent',
    width: 100,
    color: 'gray',
  },
  iconTab: {
    marginBottom: 3,
  },
});

// export const VideoPageScreenNavigator = () => {
//     return (
//         <VideoPageStackNavigator.Navigator screenOptions={defaultNavOptions}>
//             <VideoPageStackNavigator.Screen
//                 name="VideoPageScreen"
//                 component={VideoPageScreen}
//                 options={{
//                     headerMode: 'none',
//                     headerShown: false
//                 }} />
//             {/* <WebViewStackNavigator.Screen
//                 name="ForgetPassword"
//                 component={ForgetPasswordScreen}
//                 options={{
//                     headerMode: 'none',
//                     headerShown: false
//                 }} /> */}
//         </VideoPageStackNavigator.Navigator>

//     )
// }
// const VideoPageStackNavigator = createStackNavigator();
