import React, {useState} from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
//import store from './src/store';
import MealsNavigator from './src/navigation/MealsNavigator';
import productsReducer from './src/store/reducers/products';
import cartReducer from './src/store/reducers/cart';
import ordersReducer from './src/store/reducers/orders';
import mealReducer from './src/store/reducers/mealReducer';
import changeInProfile from './src/store/reducers/changeInProfile';
import loading from './src/store/reducers/loading';
//import ShopNavigator from './src/navigation/ShopNavigator';

const rootReducer = combineReducers({ 
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
  mealReducer:mealReducer,
  changeInProfile:changeInProfile,
  loading:loading
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

// useScreens();

// const fetchFonts = () => {
//   return Font.loadAsync({
//     'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
//     'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
//   });
// };

export default function App() {
  // const [fontLoaded, setFontLoaded] = useState(false);
 
  // if (!fontLoaded) {
  //   return (
  //     <AppLoading
  //       startAsync={fetchFonts}
  //       onFinish={() => setFontLoaded(true)}
  //     />
  //   );
  // }
 // <MealsNavigator />

  return <Provider store={store}>
    <MealsNavigator /> 
    </Provider>

{/* <ShopNavigator /> */}
}


// import React,{useState, useEffect} from 'react';
// import { View, Text, StyleSheet, FlatList, SafeAreaView, ActivityIndicator } from 'react-native';
// import URL from './src/api/ApiURL';
// import SplashScreen from '../screens/SplashScreen';
// //import Header from './src/Components/Header';

// const movieURL="https://reactnative.dev/movies.json";

// function App() {
//   const [isLoading, setLoading]=useState(true);
//   const [data, setData]=useState({});
//   const [title, setTitle]=useState({});
//   const [description, setDescription]=useState({});
//   const [em,setEm]=useState("0");
//   const [pas,setPas]=useState("0");
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('');


//   useEffect(() => {
//     fetch(URL+'/shipment/search?login='+email.trim()+'&password='+password+'&token='+tokken)
//       .then((response) => response.json())
//       .then((json) => {
//         setEm(email);
//         setPas(password);
//         // storeToken(em,pas);
//       // }
//       // else if(em!=="0"&&pas!=="0")
//       // {
//         navigation.navigate("SplashScreen")
//         //console.log(json.Resturant.id)
//         // setTitle(json.title)
//         // setDescription(json.description);
//       })
//       .catch((error) => console.error(error))
//       .finally(() => setLoading(false));
//   }, []);

//   return (
//     <SafeAreaView style={styles.screen}>
//       {isLoading? (<ActivityIndicator/>): (
//         <View>
//         {/* <Text style={styles.title}>{title}</Text> */}
//         <View style={{borderBottomWidth:1, marginBottom:12}}></View>
//          <FlatList
//           data={data}
//           keyExtractor={({ id }, index) => id}
//           renderItem={({ item }) => (
//           <Text style={styles.moviesText}>{item.id}. {item.name}</Text>
//           )}
//         />
//           {/* <Text style={styles.description}>{description}</Text> */}
//         </View>
//   )
//       }
//     </SafeAreaView>
//   )
//     }
  
// const styles=StyleSheet.create({
//   screen:{ 
//     flex:1,
//     alignItems:"center",
//     marginTop:48
//   },
//   moviesText:{
//     fontSize:26,
//     fontWeight:"200"
//   },
//   title:{
//     fontSize:32,
//     fontWeight:"bold"

//   },
//   description:{
//     textAlign:"center",
//     marginBottom:18,
//     fontWeight:"200",
//     color:"green"
//   }
// })

// export default App


