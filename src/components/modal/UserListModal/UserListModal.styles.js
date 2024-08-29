import { Dimensions, StyleSheet } from "react-native";

    const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    modal:{ 
        justifyContent: 'flex-end',
        margin: 0,
    },

    container: {
        padding: 10,
        borderRadius: 10,
        margin: 10,
        height: deviceSize.height /4,
        backgroundColor: 'white',
        
    },

    input_container: {

    }
})