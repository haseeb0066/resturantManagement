import React,{useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  Platform,
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Spinner from 'react-native-loading-spinner-overlay';
import Colors from '../constants/Colors';
import HeaderButton from '../components/HeaderButton'; 
import CategoryGridTile from '../components/CategoryGridTile';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import ImageAnimationScreen from '../screens/ImageAnimationScreen';
import * as productsActions from '../store/actions/products';
//import Pakistani from '../screens/PakistaniScreen';
//import HeaderImage from '../components/HeaderImage';
//import TandoorScreen from '../screens/TandoorScreen';



const CategoriesScreen = props => {
  const [isLoading, setIsLoading] = useState(false);
  // const [isRefreshing, setIsRefreshing] = useState(false);
  // const [error, setError] = useState();
  const availableCategory=useSelector(state=>state.products.availableProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    isLoading ? (
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
      setIsLoading(true),
    dispatch(productsActions.fetchProducts()),
    setIsLoading(false)
    )
  }, [dispatch]);

  const renderGridItem = itemData => {
    return (
      //<Header title="Caetory" />,
      // console.log("itemData.id",itemData.item.id),
      // console.log("itemData.id",itemData.item.imageUrl),
     
      <CategoryGridTile
        title={itemData.item.title}
        image={itemData.item.imageUrl} 
        // color={itemData.item.color}
        onSelect={() => {
          {
            props.navigation.navigate({
              routeName: ('Desi'),
              params: {
                categoryId: itemData.item.id
                
              }
            });
          }
          {
            props.navigation.navigate({
              routeName: ('Desi'),
              params: {
                categoryId: itemData.item.id
              }
            });
          }
          {
            props.navigation.navigate({
              routeName: ('ImageAnimationScreen'),
              params: {
                categoryId: itemData.item.id
              }
            });
          }
          {
            props.navigation.navigate({
              routeName: ('Bbq'),
              params: {
                categoryId: itemData.item.id
              }
            });
          }
          {
            props.navigation.navigate({
              routeName: ('Bbq'),
              params: {
                categoryId: itemData.item.id
              }
            });
          }
          {
            props.navigation.navigate({
              routeName: ('Chinese'),
              params: {
                categoryId: itemData.item.id
              }
            });
          }
          {
            props.navigation.navigate({
              routeName: ('Chinese'),
              params: {
                categoryId: itemData.item.id
              }
            });
          }
          {
            props.navigation.navigate({
              routeName: ('Tandoor'),
              params: {
                categoryId: itemData.item.id
              }
            });
          }
          {
            props.navigation.navigate({
              routeName: ('Tandoor'),
              params: {
                categoryId: itemData.item.id
              }
            });
          }
          {
            props.navigation.navigate({
              routeName: ('CategoryMeals'),
              params: {
                categoryId: itemData.item.id
              }
              
            });
            }
          
        }}
      />
     
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={availableCategory}
        keyExtractor={(item, index) => item.id}
        renderItem={renderGridItem}
        style={{ width: '100%' }}
      />
    </View>
  );
};

// CategoriesScreen.navigationOptions = navData => {
//   return {
//     headerTitle: 'All Products',
//     headerLeft:() =>(
//       <HeaderButtons HeaderButtonComponent={HeaderButton}>
//         <Item
//           title="Menu"
//           iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
//           onPress={() => {
//             navData.navigation.toggleDrawer();
//           }}
//         />
//       </HeaderButtons>
//     ),
//     // headerRight: () =>(
//     //   <HeaderButtons HeaderButtonComponent={HeaderButton}>
//     //     <Item
//     //       title="Cart"
//     //       iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
//     //       onPress={() => {
//     //         navData.navigation.navigate('Cart');
//     //       }}
//     //     />
//     //   </HeaderButtons>
//     // )
//   };
// };

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width:"100%",
    justifyContent: 'center',
    alignItems: 'center'
  },
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  }
});

export default CategoriesScreen;
