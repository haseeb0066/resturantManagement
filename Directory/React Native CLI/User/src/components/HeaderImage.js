import React from 'react';
import { View, FlatList, StyleSheet, Image } from 'react-native';

//import MealItem from './MealItem';

const HeaderImage = props => {
  const renderMealItem = itemData => {
    return (
        //title={itemData.item.title}
        console.log("header image"),
        <Image source={{ uri: "https://image.shutterstock.com/image-vector/welcome-poster-spectrum-brush-strokes-260nw-1146069941.jpg" }} style={styles.image} />

    //   <MealItem
    //     title={itemData.item.title} 
    //     image={itemData.item.imageUrl}
    //     duration={itemData.item.duration}
    //     complexity={itemData.item.complexity}
    //     affordability={itemData.item.affordability}
    //     onSelectMeal={() => {
    //       props.navigation.navigate({
    //         routeName: 'MealDetail',
    //         params: { 
    //           mealId: itemData.item.id
    //         }
    //       });
    //     }}
    //   />
    );
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
  },
  image: {
    width: '100%',
    height: 200
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center'
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10
  }
});

export default HeaderImage;
