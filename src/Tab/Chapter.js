import React,{Component} from "react";
import {View,Text,StyleSheet,ActivityIndicator,FlatList}from 'react-native'
import { tapHandlerName } from "react-native-gesture-handler/lib/typescript/handlers/TapGestureHandler";
import axios from 'axios'

export default class Chapter extends Component{

    constructor(){
        super();
        this.state={
            loader:false,
            DATA:[]
        }
    }

    getData(){
        this.setState({loader:true})
        fetch('https://api.sampleapis.com/coffee/hot')
        .then((response) =>response.json())
        .then((response)=>{
            if(response.length>0){
                this.setState({DATA:response})
            }
            this.setState({loader:false})
            console.log('YOUR RESPONSE IS:',response)
        })
        .catch((error)=>{
            this.setState({loader:false})
            console.log('ERROR IS:',error)
        })
    }


    getAxiosData(){
       this.setState({loader: true})
       axios.get('https://api.sampleapis.com/coffee/hot')
       .then((response)=>{
        this.setState({loader:false})
        console.log('AXIOS:RESPONSE',response)
       })
       .catch((error)=>{
        console.log('AXIOS:ERROR',error)
       })
    }
    componentDidMount(){
        this.getData()
    }
    render(){
        const renderItem= ({item}) => (
            <View style={styles.itemcontainer}>
                <Text style={styles.itemtext}>{item.title}</Text>
                <Text style={styles.itemdes}>{item.description}</Text>
            </View>
        )
        return(
            <View style={styles.container}>
                <ActivityIndicator size={50} color='blue' animating={this.state.loader}/>
                <Text style={styles.searchtext}
                onPress={()=>this.getAxiosData()}>hi this is Chapter page</Text>
                <FlatList style={{width:'95%',margintop:10}}
                data={this.state.DATA}
                renderItem={renderItem}/>

            </View>
        )
    }
}
const styles =StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#eeeeee'
    },
    searchtext:{
        fontSize:30,
        fontWeight:'bold',
        color:'black'
    },
    itemcontainer:{
        width:'100%',
        padding:10,
        backgroundColor:'white',
        elevation:4,
        marginBottom:7
    },
    itemtext:{
        fontSize:16,
        fontWeight:'bold',
        color:'black'
    },
    itemdes:{
        fontSize:14,
        color:'gray',
        fontWeight:'bold',
        marginTop:10
    }
})