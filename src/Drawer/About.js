import React,{Component} from "react";
import {View,Text,StyleSheet}from 'react-native'

export default class About extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.profiletext}>hi this is About page</Text>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'green'
    },
    profiletext:{
        fontSize:24,
        fontWeight:'bold',
        color:'white'
    }
    
})