import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform
} from "react-native";



import { withNavigation } from 'react-navigation';
import * as Animatable from 'react-native-animatable';
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons'
//import { Colors } from "react-native/Libraries/NewAppScreen";
import Colors from '../constants/Colors';
const ShoppingCartIcon = (props) => {

    const cartTotalLenght = useSelector(state => state.cart.count );
    return(
    <View style={[{ padding: 5 }, Platform.OS == 'android' ? styles.iconContainer : null]}>
        <View style={{
            position: 'absolute', height: 25, width: 25, borderRadius: 15, backgroundColor: Colors.primaryColor, right: 30, bottom: 20, alignItems: 'center', justifyContent: 'center', zIndex: 2000,

        }}>
        <Text style={{ color: Colors.orangeColor, fontWeight: 'bold' }}>{cartTotalLenght}</Text>
        </View>
        <Icon onPress={() => props.navigation.navigate('Cart')} name="ios-cart" size={30} color={Colors.primaryColor}/>
    </View>
    )
    }

const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}

export default connect(mapStateToProps)(withNavigation(ShoppingCartIcon));

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconContainer: {
        paddingLeft: 20, paddingTop: 10, marginRight: 5
    }
});