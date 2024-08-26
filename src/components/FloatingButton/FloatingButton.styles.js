import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#007aff',
        position: 'absolute',
        bottom: 20,
        right: 20,
        height: 60,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        //alignSelf: 'flex-end'
    },

    input_container:{
        flex:1,
    },

    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    }
})