import { StyleSheet } from 'react-native';

export default StyleSheet.create ({
    container:{
        backgroundColor:'#ccc',
        flexDirection:'row',
        margin: 5,
        borderWidth: 1,
        borderColor: 'bdbdbd'
    },
    Image:{
        minHeight:100,
        width:100,
        resizeMode:'contain',
        backgroundColor:'white'
        
    },
    body_container:{
        flex:1,
        justifyContent:'space-between'
        
        
    },
    title:{
        fontSize:16,
        fontWeight:'bold',
    },
    price:{
        textAlign:'right',
        fontStyle:'italic',
       
    },

})