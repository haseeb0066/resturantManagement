import React from 'react';
import { Text, StyleSheet} from 'react-native';

function BodyText(props) {
    return (
        <Text style={{...styles.screen, ...props.style}}>{props.children}</Text>
    )
}

const styles=StyleSheet.create({
    screen:{
        fontFamily:'open-sans'
    }
})

export default BodyText
