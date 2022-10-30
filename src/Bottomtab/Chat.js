import React,{Component} from "react";
import {View,Text,StyleSheet}from 'react-native'

export default class Chat extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.carttext}>hi this is Chat page</Text>

            </View>
        )
    }
}
const styles =StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:''
    },
    carttext:{
        fontSize:40,
        fontWeight:'bold',
        color:'black'
    }
})