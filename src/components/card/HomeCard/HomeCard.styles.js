import { StyleSheet } from "react-native";
export default StyleSheet.create({
    /*
    container:{
        borderBottomWidth: 0.5,
        //margin: 10,
        padding: 10,
        justifyContent: 'center',
    },
    */
    contactItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ededed'
        
      },
    
      contactName: {
        
        marginBottom: 5,
        color: '#0F1828',
        fontWeight: '600',
        lineHeight: 24,
        fontSize: 14, // İsim font boyutu
        color: '#333', // İsim rengi
      },

    inner_container: {
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center',
        //justifyContent: 'space-between',
    }
})