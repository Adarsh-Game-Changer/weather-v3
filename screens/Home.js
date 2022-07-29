import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import DropDownPicker from "react-native-dropdown-picker";
import { RFValue } from "react-native-responsive-fontsize";



export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
            <SafeAreaView style={styles.androidSafeArea}/>
            <ImageBackground>
             

             <View style={styles.titleBar}>  
            <Text style={styles.titleText}>Weather Forecasting</Text>
            </View>

            

                 <TouchableOpacity style={styles.button}
                 onPress={()=>this.props.navigation.navigate("Vadodara")}
                 >
                 <Text style={styles.cityname}>Vadodara</Text>
                 </TouchableOpacity>

                     <TouchableOpacity style={[styles.button,{backgroundColor:"#B3FF00",marginTop:10}]}
                     onPress={()=>this.props.navigation.navigate("Surat")}
                     >
                 <Text style={styles.cityname}>Surat</Text>
                 </TouchableOpacity>

                    <TouchableOpacity style={[styles.button,{backgroundColor:"#FF5100",marginTop:10}]}
                    onPress={()=>this.props.navigation.navigate("Ahmedabad")}
                    >
                 <Text style={styles.cityname}>Ahmedabad</Text>
                 </TouchableOpacity>

            </ImageBackground>
            </View>



        )
    }

}
const styles=StyleSheet.create({
container:{
flex:1,
backgroundColor:"#215463",

},
androidSafeArea:{
marginTop:Platform.OS==="android"?StatusBar.currentHeight:0
},

titleText:{
color:"#00FFEA",
fontSize:30,
fontWeight:"bold",
},

titleBar:{
flex:0.15,
justifyContent:"center",
alignItems:"center",
marginTop:20,
},

button:{
backgroundColor:"#0DFF00",
marginTop:200,
marginLeft:60,
borderRadius:11,
height:40,
width:200,
justifyContent:"center",
alignItems:"center",
},

cityname:{
fontWeight:"bold",
fontSize:25,



}
})