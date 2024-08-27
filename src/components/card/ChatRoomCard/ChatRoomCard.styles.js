import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
        padding: 10,
    },
    
    inner_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },

    message_text: {
        fontWeight: 'bold',
        fontSize: 16,
    }
    
})