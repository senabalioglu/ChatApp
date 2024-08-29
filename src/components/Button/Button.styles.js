import { StyleSheet } from "react-native";

const base_style = StyleSheet.create({
    container:{
        borderRadius: 30,
        justifyContent: 'center',
        margin: 5,
    },
    text: {
        padding: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    }

})

export default {
    primary: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: '#002DE3',
        },
    
        text:{
            ...base_style.text,
            color: 'white',
        }
    }),

    secondary: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            borderWidth: 1,
            borderColor: '#002DE3',
            backgroundColor: 'white',
        },
    
        text:{
            ...base_style.text,
            color: '#002DE3',
        }
    })

}
