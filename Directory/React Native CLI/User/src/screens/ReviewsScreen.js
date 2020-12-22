import React, { useState } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Platform,
  ImageBackground,
  TouchableNativeFeedback 
} from 'react-native';
import StarRating from 'react-native-star-rating';
import Card from '../components/Card';
// import DefaultText from './DefaultText';

const ReviewsScreen = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  } 

  const [starCounter, setStarCount] = useState(3.5);

  const onStarRatingPress=(rating)=> {
   
     setStarCount(rating)
  }

  return (
      
    <View style={styles.gridItem}>
        <Card style={styles.summeryContainer}>
     

              <View style={styles.starStyling}>
              <StarRating
              disabled={false}
              maxStars={5}
              rating={starCounter}
              fullStarColor={'#e3a600'}
              selectedStar={(rating) => onStarRatingPress(rating)}
               />
              </View>
              </Card>
    </View>
    
  );
};

const styles = StyleSheet.create({

  starStyling:{
    flex:1,
    marginLeft:10,
    marginRight:0,
    width: '90%',
  },
  gridItem: {
    flex: 1,
    height: 300,
    width: '100%',
    //backgroundColor: 'rgba(0,0,0,0.5)',
   //backgroundColor: 'transparent',
    //borderRadius: 10,
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
  summeryContainer:{
    marginTop:20,
    alignItems:'center',
    height:200
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
    //backgroundColor: 'transparent',
    //backgroundColor: 'rgba(0,0,0,0.5)',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    textAlign: 'right'
  },
  mealRow: {
    flexDirection: 'row',
    //backgroundColor: 'rgba(0,0,0,0.5)',
  },
  mealHeader: {
    height: '85%',
    //backgroundColor: 'rgba(0,0,0,0.5)',
  },
  titleContainer: {
    
    paddingVertical: 5,
    paddingHorizontal: 12
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
  },
  
});

export default ReviewsScreen;
