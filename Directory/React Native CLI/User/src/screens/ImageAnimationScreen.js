import React, {useRef,useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
  Platform,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  FlatList,
  ScrollView
  //YellowBox
} from 'react-native';
import {  
    createAppContainer
    
  } from 'react-navigation';
  
  import {createStackNavigator, Header} from 'react-navigation-stack';
  import {createDrawerNavigator} from 'react-navigation-drawer'
  import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
  import SecondTopScreen from '../navigation/SecondTopScreen';
  
  import AboutUsScreen from '../screens/AboutUsScreen';
  import ReviewsScreen from '../screens/ReviewsScreen';
  // import Colors from '../constants/Colors';
import HeaderImageScrollView, {
  TriggeringView,
} from 'react-native-image-header-scroll-view';
import { CATEGORIES } from '../data/dummy-data';
import ThreeTopScreen from '../navigation/ThreeTopScreen';
import CategoryGridTile from '../components/CategoryGridTile';

import * as Animatable from 'react-native-animatable';
//import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from '../constants/Colors';

// useEffect(() => {
//   YellowBox.ignoreWarnings(['VirtualizedLists should never be nested']);
// }, [])
const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
const MAX_HEIGHT = 250;
const MenuNavigator = createStackNavigator(
  {
    // MealsNavigator: MealsNavigator,
    SecondTop:SecondTopScreen,
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
      AboutUs: AboutUsScreen,
    
  },
  {
    // initialRouteName: 'Categories',
   // defaultNavigationOptions: defaultStackNavOptions
  }
);
const ReviewsNavigator = createStackNavigator(
  {
      ReviewsScreen:ReviewsScreen
    
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
    //{ImageAnimationScreen()},
    ThreeFavs:{
        screen: ThreeTopNavigator,
        navigationOptions: {
          drawerLabel: 'Menu',
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
const list = <ThreeTopScreen/>;
// const HEADER_HEIGHT = 100;
const ImageAnimationScreen = (props) => {
    const catId = props.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  //   const [scrollAnim] = useState(new Animated.Value(0));
  // const [offsetAnim] = useState(new Animated.Value(0));
  // const [clampedScroll, setClampedScroll] = useState(Animated.diffClamp(
  //   Animated.add(
  //     scrollAnim.interpolate({
  //       inputRange: [0, 1],
  //       outputRange: [0, 1],
  //       extrapolateLeft: 'clamp'
  //     }),
  //     offsetAnim
  //   ), 0, 1
  // ));

  // const navbarTranslate = clampedScroll.interpolate({
  //   inputRange: [0, HEADER_HEIGHT],
  //   outputRange: [0, -HEADER_HEIGHT],
  //   extrapolate: 'clamp'
  // });

  // renderList = ({item}) => {
  //   return (
  //     <Image source={{ uri: item }} style={{ width: '100%', height: 300 }} />
  //   )
  // }

  // return (
  //   <View style={styles.container}>
  //     <Animated.View 
  //       style={[styles.header, {
  //         transform: [{ translateY: navbarTranslate }]
  //       }]}
  //       onLayout={(event) => {
  //         let {height} = event.nativeEvent.layout;
  //         setClampedScroll(Animated.diffClamp(
  //           Animated.add(
  //             scrollAnim.interpolate({
  //               inputRange: [0, 1],
  //               outputRange: [0, 1],
  //               extrapolateLeft: 'clamp'
  //             }),
  //             offsetAnim
  //           ), 0, height)
  //         );
  //       }}
  //     >
  //        <View style={styles.titleContainer}>
  //         <Text style={styles.imageTitle}>{selectedCategory.title}</Text>
  //         </View>
  //     </Animated.View>
  //     <Animated.FlatList 
  //       contentInset={{ top: HEADER_HEIGHT }}
  //       contentOffset={{ y: -HEADER_HEIGHT }}
  //       bounces={false}
  //       scrollEventThrottle={16}
  //       style={{ flexGrow: 1, width: '100%' }}
  //       //keyExtractor=list
  //       data={list}
  //       renderItem={renderList}
  //       onScroll={Animated.event(
  //         [
  //           {
  //             nativeEvent: {
  //               contentOffset: { y: scrollAnim }
  //             }
  //           }
  //         ],
  //         { useNativeDriver: true }
  //       )}
  //     />
  //   </View>
  // );
    // console.log(catId);
    const navTitleView = useRef(null);
    const [scrollY, setScrollY] = useState(new Animated.Value(0));

    const H_MAX_HEIGHT = 300;
    const H_MIN_HEIGHT = 100;
    const H_SCROLL_DISTANCE = H_MAX_HEIGHT - H_MIN_HEIGHT;
  
    const headerScrollHeight = scrollY.interpolate({
      inputRange: [0, H_SCROLL_DISTANCE],
      outputRange: [H_MAX_HEIGHT, H_MIN_HEIGHT],
      extrapolate: "clamp"
    });
    // const displayedMeals = Desi_MEALS.filter(
    //   meal => meal.categoryIds.indexOf(catId) >= 0
    // );
  
    //return <DesiMealList listData={displayedMeals} navigation={props.navigation} />
    // const renderItemDetail=()=>{
  return (

    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

       <HeaderImageScrollView
        maxHeight={MAX_HEIGHT}
        minHeight={MIN_HEIGHT}
        maxOverlayOpacity={0.8}
        minOverlayOpacity={0.3}
        renderHeader={() => (
          <Image source={{ uri:selectedCategory.imageUrl }} style={styles.image} />
        )}
        renderForeground={() => (
          <View style={styles.titleContainer}>
            <Text style={styles.imageTitle}>{selectedCategory.title}</Text>
          </View>
        )}
        renderFixedForeground={() => (
          <Animatable.View style={styles.navTitleView} ref={navTitleView}>
            <Text style={styles.navTitle}>{selectedCategory.title}</Text>
          </Animatable.View>
        )}>
         
       
    
          <View style={{ height: 1500 }}>
          <SafeAreaView>
         <TriggeringView
          //style={styles.section}
          onHide={() => navTitleView.current.fadeInUp(200)}
          onDisplay={() => navTitleView.current.fadeOut(100)}
          scrollViewBackgroundColor="#ddddff"
          style={{flex: 1}}
        >

        <View style={{flex: 1},[styles.section, styles.sectionLarge,]}>
        
        <SafeAreaView style={{flex: 1}}>
        <ThreeTopScreen/>
        </SafeAreaView>
     
        </View>
        </TriggeringView>
        </SafeAreaView>
        
        </View>
     
        </HeaderImageScrollView> 
        
      
      
{/* <ThreeTopScreen />  */}
    </View>
  );
  // return (
  //   <View style={styles.container}>
  //     <AnimatedFlatList
  //       contentContainerStyle={{marginTop: 200}}
  //       scrollEventThrottle={16} // <-- Use 1 here to make sure no events are ever missed
  //       onScroll={Animated.event(
  //         [{nativeEvent: {contentOffset: {y:scrollY}}}],
  //         {useNativeDriver: true} // <-- Add this
  //       )}
  //       data={CATEGORIES}
  //       renderItem={renderItem}
  //       keyExtractor={(item, i) => i}/>
  //     <Animated.View style={[styles.headerWrapper, {transform: [{translateY}]}]}/>
  //   </View>
  // )
  // const renderItemDetail=()=>{

  //   return (
  //   <Animated.ScrollView
  //   onScroll={Animated.event([
  //   {nativeEvent: {contentOffset: { y: scrollY}}}],
  //   {useNativeDriver: false})}
  //   scrollEventThrottle={16}
  //   >
  //     )}
    
};



const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    zIndex: 10000
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20
  },
  container: {
    flex: 1,
  },
  image: {
    height: MAX_HEIGHT,
    width: Dimensions.get('window').width,
    alignSelf: 'stretch',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 20,
  },
  name: {
    fontWeight: 'bold',
  },
  section: {
    //padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionContent: {
    fontSize: 16,
    textAlign: 'justify',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  categoryContainer: {
    flexDirection: 'row',
    backgroundColor: '#FF6347',
    borderRadius: 20,
    margin: 10,
    padding: 10,
    paddingHorizontal: 15,
  },
  category: {
    fontSize: 14,
    color: '#fff',
    marginLeft: 10,
  },
  titleContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageTitle: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 24,
  },
  navTitleView: {
    height: MIN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 40 : 5,
    opacity: 0,
  },
  navTitle: {
    color: 'white',
    fontSize: 18,
    backgroundColor: 'transparent',
  },
  sectionLarge: {
    minHeight: 700,
  },
});
export default ImageAnimationScreen;