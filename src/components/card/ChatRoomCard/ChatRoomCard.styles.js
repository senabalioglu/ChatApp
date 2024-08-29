import { StyleSheet } from "react-native";

const base_style = StyleSheet.create({
    container:{
        margin: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
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

export default {
    primary: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: '#002DE3',
            borderBottomLeftRadius: 10, //kişinin kendisi mesaj attığında bottomLeft olacak
            marginLeft: 30,
        },

        username_text: {
            color: 'white'
        },
    
        date_text: {
            color: 'white'
        },

        message_text: {
            ...base_style.message_text,
            color: 'white',
        }
        
    }),

    secondary: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            marginRight: 30,
            backgroundColor: 'white',
            borderBottomRightRadius: 10, //kişinin kendisi mesaj attığında bottomLeft olacak
        },
        message_text: {
            ...base_style.message_text,
            color: 'black',
        },

        date_text: {
            color: 'black'
        },

        message_text: {
            ...base_style.message_text,
            color: 'black',
        }
        
        
    }),
}