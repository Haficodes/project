import React,{Component} from "react";
import{ View,
    Text,
    StyleSheet,
    TouchableHighlight,

}from 'react-native'
class FlexContent extends Component {
    render(){
        return(
            <View>
                <Text style={styles.contentstyle}>Hi My Name Is {this.props.name} </Text>
            </View>
        )
    }
}
export default class Flexbox extends Component{
    constructor(){
        super();
        this.state={
            maintext:'HELLO',
            subtext:'WORLD'
        }
    }
    componentDidMount(){
        console.log()
    }
    updatetext(){
        this.setState({
            maintext:'HI',
            subtext:'DUDE'
        })
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text1}>{this.state.maintext} </Text>
                <Text style={styles.text1}>{this.state.subtext} </Text>

                <TouchableHighlight style={styles.button}
                underlayColor='red'
                onPress={()=> this.updatetext()}>
                    <Text style={styles.text2}>UPDATE</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    style= {styles.button}
                    underlayColor='green'
                    onPress={()=>this.props.navigation.navigate('Drawer')}>
                        <Text style={styles.text2}>DRAWER

                        </Text>
                </TouchableHighlight>

                <TouchableHighlight 
                    style={styles.button}
                    underlayColor='red'
                    onPress={()=> this.props.navigation.navigate('Tab')}>
                         <Text style={styles.text2}>TAB</Text>

                </TouchableHighlight>

                <TouchableHighlight 
                    style={styles.button}
                    underlayColor='red'
                    onPress={()=> this.props.navigation.navigate('Bottomtab')}>
                        <Text style={styles.text2}>BOTTOM TAB</Text>

                </TouchableHighlight>

                <TouchableHighlight 
                    style={styles.button}
                    underlayColor='red'
                    onPress={()=> this.props.navigation.navigate('Cartpage')}>
                        <Text style={styles.text2}>CART PAGE</Text>

                </TouchableHighlight>

                

                <FlexContent
                name ={this.props.route.params.username}>

                </FlexContent>


            </View>
        )
        
    }
}
const styles=StyleSheet.create({
    container:{flex:1,backgroundColor:'#0',alignItems:'center',justifyContent:'center',},
    text1:{color:'#027ed1',fontWeight:'bold',fontSize:40,fontStyle:'italic'},
    button:{width:'60%',height:50,backgroundColor:'green', marginTop:30,borderRadius:10,alignItems:'center',justifyContent:'center'},
    text2:{fontSize:20,fontWeight:'bold',color:'white'},
    contentstyle:{color:'black',fontSize:20,fontWeight:'bold'}
}
    

)