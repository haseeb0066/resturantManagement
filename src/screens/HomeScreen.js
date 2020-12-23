import React from 'react';
import { View, Text, Button} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from './SplashScreen';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Splash... again"
          onPress={() => this.props.navigation.navigate('SplashScreen')}
        />
        </View>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
    {
        HomeScreen: HomeScreen,
        SplashScreen: SplashScreen,
      },
      {
        initialRouteName: 'HomeScreen',
      }
);

export default createAppContainer(AppNavigator);