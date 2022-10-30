import React,{Component} from "react";
import{
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  TextInput,
  TouchableHighlight
  
}from 'react-native'

export default class Login extends  Component{
  constructor(){
    super();
    this.state={
      name: null
    }
  }
  updatevalue(username){
    this.setState({name: username})

  }
  render(){
    return(
      <View style= {styles.container}>
        <ImageBackground 
        style={styles.container}>
          <Image source={require('../assets/fbbgremove.png')}style={styles.logo}>
          </Image>
          <Text style={styles.textview}>WELCOME TO FACEBOOK</Text>
          <TextInput style={styles.inputview} 
          placeholder='Username'
          placeholderTextColor={'#027ed1'}
          maxLength={10}
          onChangeText={(username)=>this.updatevalue(username)}>
          </TextInput>
          <TextInput style={styles.inputview} 
          placeholder='Password'
          placeholderTextColor={'#027ed1'}
          secureTextEntry={true} 
          maxLength={10}>

          </TextInput >
          <TouchableHighlight style={styles.buttonview}
          underlayColor ='trasperent'
          onPress={()=>this.props.navigation.navigate('Flexbox',{username:this.state.name})}>
            <Text style={styles.buttontext}>login</Text>
          </TouchableHighlight>

        </ImageBackground>

      </View>
    )
  }
}

const styles =StyleSheet.create({
container : {
    height:'100%',
    width:'100%',
  backgroundColor:'blue',alignItems:'center',justifyContent:'center'
},
logo:{height:100, width:100,alignItems:'center',justifyContent:'center'},
textview:{marginTop:20,fontSize:20,fontWeight:'bold',color:'black'},
inputview:{width:'80%',height:50,borderWidth:1,borderColor:'#027ed1',marginTop:20,paddingLeft:20},
buttonview:{width:'60%',height:50,backgroundColor:'#027ed1', marginTop:10,borderRadius:10,alignItems:'center',justifyContent:'center',},
buttontext:{color:'white',fontSize:20,fontWeight:'bold'}

}
)