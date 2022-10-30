import React,{Component} from "react";
import {View,Text,StyleSheet}from 'react-native'

export default class Help extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.hometext}>hi this is Help page</Text>

            </View>
        )
    }
}
const styles =StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'blue'
    },
    hometext:{
        fontSize:40,
        fontWeight:'bold',
        color:'black'
    }
})