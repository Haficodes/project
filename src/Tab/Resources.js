import React,{Component} from "react";
import {View,Text,StyleSheet}from 'react-native'

export default class Resources extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.categorytext}>hi this is Catogory page</Text>

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
    categorytext:{
        fontSize:30,
        fontWeight:'bold',
        color:'black'
    }
})