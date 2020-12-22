import React from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native';
import Colors from '../constants/Colors';
import TitleText from '../components/TitleText';


const Header = props=> {
    return (
        <View style={{...styles.header, ...Platform.select({
            ios: styles.headerIOS, 
            android: styles.headerANDROID
        }) }}>
            <TitleText style={styles.tittle}>{props.title} </TitleText>
        </View>
    )
}

const styles=StyleSheet.create({
    header:{
        height:90,
        width:'100%',
        justifyContent:'center',
        paddingTop: 36,
       // backgroundColor: Platform.OS ==='android'? Colors.primary: 'white' ,
        alignItems: 'center' ,
       // borderBottomColor: Platform.OS==='ios'?'#ccc':'transparent',
        //borderBottomWidth: Platform.OS==='ios'?1:0

    },
    headerIOS:{
        backgroundColor: 'white' ,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    headerANDROID:{
        backgroundColor:  Colors.primary,
        borderBottomColor: 'transparent',
        borderBottomWidth: 0
    },
    tittle: {
        color:Platform.OS==='ios'?Colors.primary:'white',
        fontSize: 28,
        fontStyle:'italic',
        fontFamily:'open-sans-bold'
        
    }
})


export default Header
