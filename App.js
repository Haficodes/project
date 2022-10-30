import React from 'react'
import {View,Text,StyleSheet}from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator} from '@react-navigation/drawer'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Searchbar } from 'react-native-paper';
import icons from 'react-native-vector-icons/MaterialIcons'




import Login from './src/Login'
import Flexbox from'./src/Flexbox'
import Home from'./src/Drawer/Home'
import Profile from'./src/Drawer/Profile'
import DrawerContent from './src/Drawer/DrawerContent'
import About from './src/Drawer/About'
import Settings from './src/Drawer/Settings'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Call from './src/Bottomtab/Call'
import Chat from './src/Bottomtab/Chat'
import Status from './src/Bottomtab/Status'
import Records from './src/Drawer/Records'
import Help from './src/Drawer/Help'
import Refundpolicies from './src/Drawer/Refundpolicies'
import WalletBalance from './src/Drawer/WalletBalance'
import Videos from './src/Tab/Videos'
import Chapter from './src/Tab/Chapter'
import Resources from './src/Tab/Resources'
import QNBank from './src/Tab/QNBank'
import Cartpage from './src/Cartpage'
import { ScreenStackHeaderRightView } from 'react-native-screens'




const Stack =createStackNavigator()
const Drawer =createDrawerNavigator()
const Tab =createMaterialTopTabNavigator()
const BottomTab =createBottomTabNavigator()





function MyStack(){
    return(
    
        <Stack.Navigator>
            <Stack.Screen
              name ='Login'
              component={Login}
              options={{headerShown:false}}/>
            <Stack.Screen
              name ='Flexbox'
              component ={Flexbox} />
            <Stack.Screen
              name='Drawer'
              component={MyDrawer}
              options={{headerShown:false}}/>
            <Stack.Screen
              name='Tab'
              component={MyTab}
              options={{headerShown:false}}/> 
            <Stack.Screen
              name='Bottomtab'
              component={MyBottomTab}
              options={{headerShown:false}}/>

            <Stack.Screen
            name='Cartpage'
            component={Cartpage}
            />  
        </Stack.Navigator>
    )
}

function MyDrawer(){
    return(
      
        <Drawer.Navigator
            drawerContent= {(props)=> <DrawerContent{...props}/>}>
              
                
            <Drawer.Screen
            name='Home'
            component={Home}/>

            <Drawer.Screen
            name='Profile'
            component={Profile}/>

            <Drawer.Screen
            name='Wallet Balance'
            component={WalletBalance} />

            <Drawer.Screen
            name='Records'
            component={Records} />

            <Drawer.Screen 
            name='Refund policies'
            component={Refundpolicies} />

            <Drawer.Screen
            name='About'
            component={About} />

            <Drawer.Screen
            name='Settings'
            component={Settings}/>

            <Drawer.Screen
            name='Help'
            component={Help} />

        </Drawer.Navigator>

    )
}


function MyTab(){

    return(

      <View style={styles.container} >
        
        <Searchbar style={styles.searchbar}
          iconColor='red'
          placeholder="Search"
          placeholderTextColor={'red'}
    />
      
        <Tab.Navigator

          screenOptions={{
            tabBarLabelStyle:{fontSize:12},
            tabBarStyle:{backgroundColor:'white'}
           }}> 

            <Tab.Screen
              name='Videos'
              component={Videos}
              options={{
                tabBarInactiveTintColor:'gray',
                tabBarActiveTintColor:'blue',
                }} />
            <Tab.Screen
              name='Chapter'
              component={Chapter}
              options={{
                tabBarInactiveTintColor:'gray',
                tabBarActiveTintColor:'blue',
            }} />
            <Tab.Screen
              name='Resources'
              component={Resources}
              options={{
                tabBarInactiveTintColor:'gray',
                tabBarActiveTintColor:'blue',
              }} />
            <Tab.Screen
              name='QN Bank'
              component={QNBank}
              options={{
                tabBarActiveTintColor:'blue',
                tabBarInactiveTintColor:'gray',
                
              }} />
        </Tab.Navigator>
        </View>
    )
}

function MyBottomTab (){
  return(
    <BottomTab.Navigator
       screenOptions={{
        tabBarLabelStyle:{fontSize:12},
        tabBarItemStyle:{width:100},
        tabBarStyle:{backgroundColor:'#fff'}
       }}>
      <BottomTab.Screen
        name='Call'
        component={Call}
        options={{
          tabBarIcon:({focused})=>focused?<Icon name='call' size={24} color='green'/>:<Icon name='call' size={24} color='gray' />
        }}
        />
      <BottomTab.Screen
        name='Chat'
        component={Chat}
        options={{
          tabBarActiveTintColor:'blue',
          tabBarInactiveTintColor:'gray',
          tabBarIcon:({focused})=>focused? <Icon name='chat' size={24} color='green' />:<Icon name='chat' size={24} color='gray' />
        }}
        />
      <BottomTab.Screen
        name='Status'
        component={Status}
        options={{
          tabBarIcon:({focused})=>focused? <Icon name='timelapse' size={24} color='green' />:<Icon name='timelapse' size={24} color='gray' />
        }}
        />
    </BottomTab.Navigator>
  )
}


export default function App(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}



const styles =StyleSheet.create({
  container : {
   flex:1
    
  },
searchbar:{
  width:'100%',
  height:50,
  backgroundColor:'white',
  borderWidth:2,
  shadowColor:'gray',
  borderColor:'gray',
  borderRadius:100,
  marginTop:5
}
})
