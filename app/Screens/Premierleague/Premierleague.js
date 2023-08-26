import React,{useState} from "react";
import { View , Text , Image , TouchableOpacity , Alert , TextInput , StyleSheet } from 'react-native';
export default  function UserProfile (){
    return (
        <View>
        <TouchableOpacity>
            <Image source={require('../../../assets/imges/edit.png')} style={{width : 38 , height : 31 , marginVertical : 24 , marginHorizontal : 340}}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={require('../../../assets/imges/back.png')} style={{width : 108 , height : 72 , marginVertical : -73 , marginHorizontal :-28 }}/>
        </TouchableOpacity>
        <Image source={require('../../../assets/imges/EnglishPremierLeague.png')} style={{width :125 , height : 125 , marginLeft : 12 , marginTop : 20}}/>
            <Text style={{fontSize:55 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 140 , marginTop : -110 }}>Premier</Text>
            <Text style={{fontSize:48 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 140 , marginTop : -20 }}>league</Text>
        </View>
        )}