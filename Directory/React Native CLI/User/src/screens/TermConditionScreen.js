import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';

function TermConditionScreen() {
    return (
      <View style={styles.container}>

        <ScrollView>
        <View style={styles.screen}>
            {/* <Text style={styles.heading}>
            Terms and Conditions
            </Text> */}
            </View>

            <Text style={styles.smallHeading}>
            1. TERMS OF USE
            </Text>

            <Text style={styles.text}>
            These Terms of Use (“Terms”) govern your use of the websites and mobile applications provided by foodpanda (or referred to as “us”) (collectively the “Platforms”). Please read these Terms carefully. By accessing and using the Platforms, you agree that you have read, understood and accepted the Terms including any additional terms and conditions and any policies referenced herein, available on the Platforms or available by hyperlink. If you do not agree or fall within the Terms, please do not use the Platforms.

The Platforms may be used by (i) natural persons who have reached 18 years of age and (ii) corporate legal entities, e.g companies. Where applicable, these Terms shall be subject to country-specific provisions as set out herein. 

Users below the age of 18 must obtain consent from parent(s) or legal guardian(s), who by accepting these Terms shall agree to take responsibility for your actions and any charges associated with your use of the Platforms and/or purchase of Goods. If you do not have consent from your parent(s) or legal guardian(s), you must stop using/accessing the Platforms immediately. 

foodpanda reserves the right to change or modify these Terms (including our policies which are incorporated into these Terms) at any time. You are strongly recommended to read these Terms regularly. You will be deemed to have agreed to the amended Terms by your continued use of the Platforms following the date on which the amended Terms are posted.
            </Text>

            <Text style={styles.smallHeading}>
            2. WHAT WE DO
            </Text>

            <Text style={styles.text}>
            Through our Platforms, foodpanda links you to the vendors (“Vendors”) for you to order a variety of goods including prepared meals, non-prepared food and miscellaneous non-food items (hereinafter collectively referred to as "Goods") to be delivered to you. When you place an order for Goods from our Vendors (“Order”), foodpanda acts as an agent on behalf of that Vendor to facilitate, process and conclude the order and subsequently for either us or the Vendor to deliver your Order to you. Vendors may be owned and operated by third party vendors, our affiliate companies, or us.

1.3 How to contact us

For customer support, you may reach out to us via email or through our in-app customer support chat feature. 
            </Text>

            </ScrollView>
        </View>
    )
}

TermConditionScreen.navigationOptions = navData => {
    return {
      headerTitle: 'TERMS & CONDITIONS',
      headerLeft: ()=>null
    };
  };

const styles=StyleSheet.create({

  container:{
    flex: 1,
  },

  screen:{
    alignItems:'center',
},

heading:{
  marginTop:10,
  fontFamily:'open-sans-bold',
  fontSize:30,
  color:"#EE0202",
},

smallHeading:{
  marginTop:30,
  fontFamily:'open-sans-bold',
  fontSize:20,
  paddingLeft:10,
},

text:{
  marginTop:10,
  fontFamily:'open-sans-bold',
  fontSize:14,
  padding: 20
},

})

export default TermConditionScreen
