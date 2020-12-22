import React from 'react';
import { View, FlatList,Dimensions, StyleSheet, Image, ScrollView } from 'react-native';
import TitleText from '../components/TitleText'
import BodyText from '../components/BodyText'
import Colors from '../constants/Colors'
import My_Button from '../components/MealList'
//import MealItem from './MealItem';
class LogoTitle extends React.Component {
  render() {
    return (
      <Image
         source={{uri:'https://c4.wallpaperflare.com/wallpaper/391/886/484/hills-mountains-night-nature-wallpaper-preview.jpg'}}
        //source={require('./spiro.png')}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}
// const HeaderImageScreen = props => {
  
//   return (
//     <ScrollView>
//     <View style={styles.screen}>
//         {/* <TitleText>The Game is Over!</TitleText> */}
//         <View style={styles.imageContainer}>
//         <Image 
//         //source={require('../../assets/success.png')} 
//         source={{uri:'https://c4.wallpaperflare.com/wallpaper/391/886/484/hills-mountains-night-nature-wallpaper-preview.jpg'}} 
//         style={styles.image}
//         resizeMode={'cover'} />
//         </View>
//         {/* <View style={styles.reultContainer}> 
//         <BodyText style={styles.resultTest} >Your Phone Needed <Text style={styles.highLight}>{props.roundsNumber} </Text>
//         Rounds to Guess Number<Text style={styles.highLight}> {props.userNumber}</Text>
//         </BodyText>  */}
        
//         {/* </View> */}
//         {/* <My_Button  onPress={props.onRestart}>NEW GAME</My_Button> */}
//     </View>
//     </ScrollView>
// )
// }

// const styles=StyleSheet.create({
// screen:{
//     flex:1,
//     justifyContent:'center',
//     alignItems:'center',
//     paddingVertical:10

// },
// image:{
//     width:'100%',
//     height: '100%'
// },
// imageContainer:{
//     width:Dimensions.get('window').width*0.7,
//     height:Dimensions.get('window').width*0.7,
//     //borderRadius:Dimensions.get('window').width*0.7/2,
//     borderWidth:3,
//     borderColor:'black',
//     overflow:'hidden',
//     marginVertical:Dimensions.get('window').height/30

// },
// highLight:{
//     color:Colors.primary,
//     fontFamily:'open-sans-bold' 
// },
// resultTest:{
//     textAlign:'center',
//     fontSize:Dimensions.get('window').height<400?16:20 
// },
// resultContainer:{
//     marginHorizontal: 30,
//     marginVertical: Dimensions.get('window').height/60
// }
// }); 

export default LogoTitle;
