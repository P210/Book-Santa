import * as React from 'react';
import{View,Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import db from '../config'
import firebase from 'firebase'

export default class WelcomeScreen extends React.Component{
    constructor(){
        super()
        this.state={
            emailId:'',
            password:''
        }
    }
    userlogin=(emailId,password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId,password)
        .then(()=>{
        return Alert.alert("Sucessfully Login")
        })
        .catch((error)=>{
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage)
        })
    }
    userSignUp=(emailId,password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId,password)
        .then((response)=>{
        return Alert.alert("User Added Sucessfully")
        })
        .catch((error)=>{
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage)
        });
    }
    render(){
        return(
     <View style={styles.container}>
    <Text style={styles.title}>
     Book Santa
     </Text>
     <View>
         <TextInput style={styles.LoginBox}
          placeholder="abc@example.com"
          keyboardType="email-address"
          onChangeText={(text)=>{
              this.setState({
                  emailId:text
              })
          }}
             />
                      <TextInput style={styles.LoginBox}
          placeholder="enter Password"
          secureTextEntry={true}
          onChangeText={(text)=>{
              this.setState({
                  password:text
              })
          }}
             />
             <TouchableOpacity style={styles.button}
             onPress={()=>{
                 this.userlogin(this.state.emailId, this.state.password)
             }}>
            <Text style={styles.buttonText}>Login</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.button}
             onPress={()=>{
                 this.userSignUp(this.state.emailId,this.state.password)
             }}>
            <Text style={styles.buttonText}>SignUp</Text>
             </TouchableOpacity>
     </View>
     </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
    flex:1,
    background:'red',
    },
    button:{
width:300,
height:50,
justifyContent:'center',
alignItems:'center',
borderRadius:25,
background:'#ff9800',
shadowColor:'#000',
shadowOffset:{
    width:0,
    height:8,
},
shadowOpacity:0.30,
shadowRadius:10.32,
elevation:16,
    },
    buttonText:{
color:'#ffff',
fontWeight:'bold',
fontSize:20
    },
    LoginBox:{
 width:300,
 height:40,
 borderBottomWitdth:1.5,
 borderColor:'#ff8a65',
 fontSize:20,
 margin:10,
 paddingLeft:10
    },
    title:{
fontSize:70,
fontWeight:'bold',
paddingBottom:30,
color:'#ff3d00'
    }
})