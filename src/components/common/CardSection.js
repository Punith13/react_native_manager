import React from 'react'; 
import { View } from 'react-native'; 

const CardSection = (props) => (
        <View style={[styles.containerStyle, props.style]}>
            {props.children}
        </View>
    ); 


const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        flexDirection: 'row', 
        borderColor: '#ddd',
        position: 'relative'
    }
};

export { CardSection };

