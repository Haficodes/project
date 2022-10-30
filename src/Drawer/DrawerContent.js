import React,{Component} from "react";
import { View,Text,StyleSheet,Image } from 'react-native';
import { TouchableHighlight } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";
import Profile from "./Profile";

export default class DrawerContent extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style= {styles.profilecontainer}>
                    <View style={styles.profileicon}>
                       <Image style={styles.profilelogo}source={require('../../assets/fbbgremove.png')}></Image>
                       <TouchableHighlight style={styles.button}
                       underlayColor='white'>
                        <Text style ={styles.invitetext}>Invite</Text>
                       </TouchableHighlight>
                    </View>
                    <View style={styles.infoview}>
                        <Text style={styles.nametext}>MUSK</Text>

                        <TouchableHighlight style={styles.goldtext}>
                        <Text style ={styles.invitetext}>GOLD</Text>
                       </TouchableHighlight>
                        
                        <Text style={styles.emailtext}> Total Coin </Text>
                        <Text style={styles.numbertext}> Coin : 2000</Text>
                    </View>
                </View>
                <Text style={styles.menu}
                onPress={()=> this.props.navigation.navigate('Home')}>Home</Text>
                <Text style={styles.menu}
                onPress={()=> this.props.navigation.navigate('Profile')}>Profile</Text>
                <Text style={styles.menu}
                onpress={()=> this.props.navigation.navigate('WalletBalance')}>Wallet Balance</Text>
                <Text style={styles.menu}
                onPress={()=> this.props.navigation.navigate('About')}>About</Text>
                <Text style={styles.menu}
                onpress={()=> this.props.navigation.navigate('Records')}>Records</Text>
                <Text style={styles.menu}
                onpress={()=> this.props.navigation.navigate('Refundpolicies')}>Refund Policies</Text>
                <Text style={styles.menu}
                onPress={()=> this.props.navigation.navigate('Settings')}>Settings</Text>
                <Text style={styles.menu}
                onpress={()=> this.props.navigation.navigate('Help')}>Help</Text>

                <Text style={styles.logouttext}
                onpress={()=> this.props.navigation.navigate('Tab')}>Logout</Text>
            </View>
        )
    }
}

const styles =StyleSheet.create({
    container:{
        flex :1,
        backgroundColor:'white',
    },
    menu:{
        fontSize:18,
        marginTop:20,
        marginLeft:20,
        color:'black',
        fontWeight:'bold',
        borderRadius:1,
        borderColor:'black',
        borderBottomWidth:1,
        
        
        
        
       
        
    },
    profilecontainer:{
        height:'23%',
        width:'100%',
        backgroundColor:'skyblue',
        flexDirection:'row',
        alignItems:'center'
    },
    profileicon:{
        height:70,
        width:70,
        backgroundColor:'white',
        borderRadius:50,
        marginTop:1,
        marginBottom:60,
        marginLeft:10,
    },
    infoview:{
        marginLeft:10
    },
    profilelogo:{
        height:'100%',
        width:'100%'

    },
    nametext:{
        color:'#000',
        fontSize:25,
        fontWeight:'bold',
        marginTop:1,
        marginLeft:103,
        
    },
    emailtext:{
        fontWeight:'bold',
        color:'black',
        marginLeft:100

    },
    numbertext:{
        fontWeight:'bold',
        color:'black',
        marginLeft:100
    },
    logouttext:{
        fontSize:25,
        fontWeight:'bold',
        alignItems:'center',
        justifyContent:'center',
        marginLeft:'37%',
        marginTop:120,
        color:'black'

    },
    goldtext:{
        width:70,
        height:20,
        borderRadius:100,
        backgroundColor:'yellow',
        marginLeft:100,
        marginTop:1,
        marginBottom:50,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        
    },
    button:{width:70,
    height:20,
    backgroundColor:'white',
     marginTop:45,
     borderRadius:5,
     alignItems:'center',
    justifyContent:'center'},
    
    invitetext:{
        color:'black',
    fontWeight:'bold'
    }


})