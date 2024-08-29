import { StyleSheet, Fill, Hug } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5', // Arka plan rengi
        padding: 16,
      },
      header: {
        fontSize: 24, // Başlık font boyutu
        fontWeight: 'bold',
        color: '#333', // Başlık rengi
        marginBottom: 20,
      },
      header_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
      }
      
  });