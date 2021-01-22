import React,{useState} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Platform,
  ImageBackground,
  TouchableNativeFeedback 
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

const CategoryGridTile = props => {
  let TouchableCmp = TouchableOpacity;
  const [isLoading, setIsLoading] = useState(false);

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  } 
  return (
    <View style={styles.gridItem}>
      {isLoading ? (
          <Spinner
          //visibility of Overlay Loading Spinner
          visible={isLoading}
          // size="normal"
          // animation='fade'
          //Text with the Spinner
          // textContent={'Loading...'}
          //Text style of the Spinner Text
          // textStyle={styles.activityIndicator}
        />):(
          // setIsLoading(true),
      <TouchableCmp style={{ flex: 1 }} onPress={props.onSelect}>
        {/* <View style={{ ...styles.container, ...{ ImageBackground: props.image } }}> */}
        <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground
            require={(props.image)}
              // source={{ uri: props.image }}
              style={styles.bgImage}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {props.title}
                </Text>
              </View>
            </ImageBackground> 
          </View>
        {/* </View> */}
      </TouchableCmp>
      // setIsLoading(false)
        )}
      
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    //flex: 1,
    height: 200,
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    overflow:
      Platform.OS === 'android' && Platform.Version >= 21
        ? 'hidden'
        : 'visible',
    elevation: 5,
    marginVertical: 10
  },
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    //shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    textAlign: 'right'
  },
  mealRow: {
    flexDirection: 'row'
  },
  mealHeader: {
    height: '85%'
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
  }
});

export default CategoryGridTile;
