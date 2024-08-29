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
        backgroundColor: '#FFFFFF', // Liste öğesi arka plan rengi
        padding: 16,
        marginBottom: 10,
        borderRadius: 8,
        shadowColor: '#000000', // Gölge rengi
        shadowOpacity: 0.1, // Gölge opaklığı
        shadowRadius: 8, // Gölge yarıçapı
        elevation: 2, // Android için gölge
      },
    
      contactName: {
        fontSize: 18, // İsim font boyutu
        color: '#333', // İsim rengi
      },

    inner_container: {
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})