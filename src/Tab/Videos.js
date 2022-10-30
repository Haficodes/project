import React,{Component} from "react";
import {View,Text,StyleSheet}from 'react-native'
import { TouchableHighlight } from "react-native-gesture-handler";
import WebView from 'react-native-webview';

export default class Videos extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.searchtext}>Click here for watch video</Text>
                <TouchableHighlight style={styles.button} >
                    <Text style={styles.buttontext}>WATCH VIDEO</Text>

                </TouchableHighlight>
                

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
    },
    button:{backgroundColor:'red',
    height:'27%',
    width:170,
    borderRadius:30,
    marginTop:20,

    },
    buttontext:{
        fontSize:20,
        fontWeight:'bold',
        color:'white',
        marginLeft:15,
        marginTop:10

    }
})