import React, {Component} from "react";
import { Text,View,TouchableOpacity,TextInput,Alert } from "react-native";
import db from "../config"
export default class Profile extends Component{
constructor(){
    super(),
    this.state={
        
    }
}
    render(){
    return(
        <View style={{flex:1,justifyContent:"center",alignItems:"centre",backgroundColor:"#cb2596"}}>
     <Text style={{marginTop:5,
    marginLeft: 22,
     fontWeight: 'bold',
     fontStyle: "italic",
    fontSize: 30,
    justifyContent:"center",alignItems:"centre",
    color:"brown"}}>Profile Screen</Text>
        </View>
    )
}
}









