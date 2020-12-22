import React from 'react'
import { 
  View,
  Text,
  ScrollView, 
  StyleSheet,
  TouchableOpacity,
  Dimensions,
    Image,
    Platform,
  Button } from 'react-native';
import Header from '../components/Header';
import ProfileScreen from '../screens/ProfileScreen';
import AboutUsScreen from '../screens/AboutUsScreen';
import AddressScreen from '../screens/AddressScreen';
import ChangePasswordScreen from '../screens/ChangePasswordScreen';
import My_OrderScreen from '../screens/My_OrderScreen';
import PrivacyPolicyScreen from '../screens/PrivacyPolicyScreen';
import TermConditionScreen from '../screens/TermConditionScreen';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import  Icon  from 'react-native-vector-icons/Ionicons';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useSelector, useDispatch } from 'react-redux';
import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';


function AccountScreen(props) {


  // const nameEdit = props.navigation.getParam('n1');
  // const phoneEdit = props.navigation.getParam('p1');
  // const emailEdit = props.navigation.getParam('e1');
  const name=useSelector(state=>state.changeInProfile.name);
  const email=useSelector(state=>state.changeInProfile.email);
  const phone=useSelector(state=>state.changeInProfile.phone);
  // console.log("account",name)
  // console.log(email)
  // console.log(phone)

  //console.log("defult",nameEdit, phoneEdit, emailEdit)

  // if((nameEdit!=null)&&(phoneEdit!=null)&&(emailEdit!=null)){

  //   if(nameEdit!=null){

  //     name= nameEdit;
  //   }
  //   else{console.log('name else ')}
  //   if(phoneEdit!=null){     
    
  //   phone= phoneEdit;
  //   }
  //   else{console.log('phone else ')}
  
  //   if(emailEdit!=null){
  
  //   email= emailEdit;
  //   }
  //   else{console.log('email else ')}
  

  // }
  
 //console.log("updated",name, phone, email)
  


  return (
    <ScrollView>
    <View style={styles.screen}>

        <View style={styles.header}>
          <View style={styles.container}>
             <Image
              style={styles.image}
              source={require('../images/profile.jpg')}
              />
            <Text style={styles.logotext}>
              {name}
            </Text>
          <View style={styles.textData}>
              <Text style={styles.text}>
              {email}
              </Text>
              <Text style={styles.text}>
              {phone}
            </Text>
          </View>
        </View>
          
        </View>

        
        <View style={styles.footer}>

          
          <View style={styles.line}>
              <TouchableOpacity style={styles.button}  onPress={() => {
              props.navigation.navigate({
              routeName: 'ProfileScreen',
              params: {
                name: name,
                email: email,
                phone: phone,
              }
              })}} >
              <Icon name="person-outline"  size={20}
              color={Colors.accentColor} />
              <Text style={styles.textDatas}>Profile</Text>
              </TouchableOpacity>
          </View>
      
          
          <View style={styles.line}>
            <TouchableOpacity style={styles.button}  onPress={() => {
            props.navigation.navigate({
            routeName: 'Address',
            // params: {
            //   categoryId: itemData.item.id
            // }
            });
            }} >       
            <FontAwesome name='address-card' size={25}
            color={Colors.accentColor} />
              <Text style={styles.textDatas}>My Addresses</Text></TouchableOpacity> 
            </View>
          


          <View style={styles.line}>
          <TouchableOpacity style={styles.button}  onPress={() => {
          props.navigation.navigate({
          routeName: 'My_Order'
          });
          }} >
            <FontAwesome name='history' size={25}
            color={Colors.accentColor} />
          <Text style={styles.textDatas}>My Orders</Text></TouchableOpacity>    
        </View>


        <View style={styles.line}>
        <TouchableOpacity style={styles.button}  onPress={() => {
        props.navigation.navigate({
          routeName: 'TermCondition'
        });
        }} >
        <FontAwesome name='ban' size={25}
        color={Colors.accentColor} />
        <Text style={styles.textDatas}>Terms & Conditions</Text></TouchableOpacity>
        </View>


        <View style={styles.line}>
        <TouchableOpacity style={styles.button}  onPress={() => {
        props.navigation.navigate({
          routeName: 'PrivacyPolicy',
        });
         }} >
        <MaterialIcons name='privacy-tip' size={25}
        color={Colors.accentColor} />
        <Text style={styles.textDatas}>Privacy Policy</Text></TouchableOpacity>
        </View>

        <View style={styles.line}>
        <TouchableOpacity style={styles.button}  onPress={() => {
        props.navigation.navigate({
          routeName: 'AboutUs'
        });
        }} >
        <Icon name='information-circle-outline' size={25}
        color={Colors.accentColor} />
        <Text style={styles.textDatas}>About Us</Text></TouchableOpacity>
        </View>


        <View style={styles.line}>
        <TouchableOpacity style={styles.button}  onPress={() => {
        props.navigation.navigate({
          routeName: 'ChangePassword'
        });
      }} >
        <MaterialCommunityIcons name='key' size={25}
      color={Colors.accentColor} />
      <Text style={styles.textDatas}>Change Password</Text></TouchableOpacity>     
      </View>


      <View style={styles.line}> 
        <TouchableOpacity style={styles.button}  onPress={() => {
        props.navigation.navigate({
          routeName: 'LoginScreen',
        });
      }} >
        <SimpleLineIcons name="logout" size={25} 
      color={Colors.accentColor} />
      <Text style={styles.textDatas}>Logout</Text></TouchableOpacity>   
      </View>
    
      
      </View>
      


    </View>
    </ScrollView>
  )
}
 
AccountScreen.navigationOptions = navData => {
  return {
    headerTitle: 'MY ACCOUNT ',
    
    // headerLeft: () =>(
    //   <HeaderButtons HeaderButtonComponent={HeaderButton}>
    //     <Item
    //       title="Menu"
    //       iconName="ios-menu"
    //       onPress={() => {
    //         navData.navigation.toggleDrawer();
    //       }}
    //     />
    //   </HeaderButtons>
    // )
  };
  };




  const styles=StyleSheet.create({
    screen:{
      flex:1,
      justifyContent: 'center'
    },
  
    header:{
      //backgroundColor:'#FF5722',
      flex: 3,
      justifyContent: "center",
      alignItems: "center",
      //marginBottom:10
    },
  
    footer:{
      borderWidth:0.5,
      borderColor:"#b0bec5",
      flex: 2,  
      //marginTop:10
    },
  
    textDatas:{
      marginLeft:15,
    },
  
    button: {
      paddingTop: 15,
      flexDirection: 'row',
    },
  
    line:{
      
      padding: 5,
      paddingLeft:15,
      borderColor:"#b0bec5",
      borderWidth:0.5,
    },
  
    container:{
      flexGrow:1,
      justifyContent: 'center',
      alignItems:'center',
      paddingTop:10,
      paddingBottom:10,
    },
  
    logotext:{
        marginVertical:5,
        fontSize:24,
        color:"#EE0202",
        fontStyle:"italic",
        //fontStyle:"oblique",
        fontWeight:"bold"
    },
  
    textData:{
      marginVertical:3,
      justifyContent: 'center',
      alignItems:'center',
    },
  
    text:{
      alignItems:'center',
      fontSize:16,
      color:'black',
    },
  
    image:{
      width: 130,
      height: 130,
      marginTop: 2,
      borderWidth:1,
      borderColor:'#EE0202',
      borderRadius:65,
    }
  
  })
export default AccountScreen
