import React from 'react';
import { View, FlatList, StyleSheet, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import MealItem from './MealItem';

const MealList = props => {
  const favoriteMeals = useSelector(state => state.mealReducer.favoriteMeals);
  const renderMealItem = itemData => {
    const isFavorite = favoriteMeals.some(meal => meal.id === itemData.item.id);
    //console.log(item.item.offerId);
    if(itemData.item.type==="Deals"){
    return (
      <MealItem
        title={itemData.item.title} 
        image={itemData.item.imageUrl}
        price={itemData.item.price}
        persons={itemData.item.persons}
        //offerId={itemData.item.offerId}
        
        onSelectMeal={() => {
          {
          props.navigation.navigate({
            routeName: ('MealDetail'),
            params: {
              mealId: itemData.item.id,
              mealTitle:itemData.item.title,
              isFav: isFavorite
            }
          });
        }
        
        




          // {
          //   props.navigation.navigate({
          //     routeName: ('PaymentScreen'),
          //     params: {
          //       mealId: itemData.item.id
          //     }
          //   });
          // }
          // {
          //   props.navigation.navigate({
          //     routeName: ('PaymentScreen'),
          //     params: {
          //       mealId: itemData.item.id
          //     }
          //   });
          // }
          
        }}
      />
    );
     }
      
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: '100%' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  }
});

export default MealList;
