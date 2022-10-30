import React,{Component} from "react";
import {View,Text,StyleSheet}from 'react-native'

export default class QNBank extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.searchtext}>hi this is QN Bank page</Text>

            </View>
        )
    }
}
const styles =StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'yellow'
    },
    searchtext:{
        fontSize:30,
        fontWeight:'bold',
        color:'black'
    }
})