import React,{useState} from "react";
import { useNavigation } from "expo-router";
import { View , Text , Image , TouchableOpacity , Alert , TextInput , StyleSheet , ScrollView} from 'react-native';
export default  function BayernMunchen  (){
    const navigation =useNavigation();
    return (
            <ScrollView>
                <TouchableOpacity onPress={()=> navigation.navigate('UserProfile')}>
            <Image source={require('../../../assets/imges/messi.png')} style={{width : 77 , height : 51 , marginVertical : 24 , marginHorizontal : 315}}/>
        </TouchableOpacity> 
        <TouchableOpacity>
            <Image source={require('../../../assets/imges/back.png')} style={{width : 108 , height : 72 , marginVertical : -90 , marginHorizontal :-28 }}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={require('../../../assets/imges/notfication.png')} style={{width : 44 , height : 30 , marginVertical : -60 , marginHorizontal : 280  }}/>
             </TouchableOpacity>
        <Image source={require('../../../assets/imges/tatics/Bayren/BayernMunchen.png')} style={{width :68 , height : 69 , marginLeft : 100 , marginTop : -70}}/>
            <Text style={{fontSize:20 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 180 , marginTop : -50 }}>Bayern </Text>
            <Text style={{fontSize:18 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 180 , marginTop : -5 }}>München</Text>
            <View style= {{marginTop:50}}>
            <Image source={require('../../../assets/imges/tatics/Bayren/Bremen.png')} style={{width :53 , height : 89.27 , marginHorizontal : 300 , marginVertical : -20  }}/>
            <Text style={{fontSize:55 , fontWeight : "bold" ,  marginVertical : -70 , marginHorizontal : 106 }}> 4  -   0</Text>
            <View style={{marginTop :'auto'}}>
            <Image source={require('../../../assets/imges/tatics/Bayren/BayernMunchen.png')} style={{width :88.44 , height : 89 , marginHorizontal : 15 , marginVertical : -10 }}/>
            <Image source={require('../../../assets/imges/tatics/Bayren/Bayrentaticas.jpg')} style={{width :420 , height : 330 , marginHorizontal : -10 , marginVertical: 40 }}/>
            <Image source={require('../../../assets/imges/tatics/Bayren/Bayrentatics.jpg')} style={{width :400 , height : 578 , marginHorizontal : -0 , marginVertical: -10 }}/>
            </View>
            </View>
            </ScrollView>
    )}