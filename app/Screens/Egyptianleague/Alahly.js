import React,{useState} from "react";
import { useNavigation } from "expo-router";
import { View , Text , Image , TouchableOpacity , Alert , TextInput , StyleSheet , ScrollView} from 'react-native';
export default  function Alahly  (){
    const navigation =useNavigation();
    return (
            <ScrollView>
                <TouchableOpacity onPress={()=> navigation.navigate('UserProfile')}>
            <Image source={require('../../../assets/imges/messi.png')} style={{width : 77 , height : 51 , marginVertical : 24 , marginHorizontal : 315}}/>
        </TouchableOpacity> 
        <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Image source={require('../../../assets/imges/back.png')} style={{width : 108 , height : 72 , marginVertical : -90 , marginHorizontal :-28 }}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={require('../../../assets/imges/notfication.png')} style={{width : 44 , height : 30 , marginVertical : -60 , marginHorizontal : 280  }}/>
             </TouchableOpacity>
        <Image source={require('../../../assets/imges/tatics/Alahaly/Alahaly.png')} style={{width :65 , height : 99 , marginLeft : 100 , marginTop : -70}}/>
            <Text style={{fontSize:20 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 180 , marginTop : -50 }}>Alahly </Text>
            <View style= {{marginTop:50}}>
            <Image source={require('../../../assets/imges/tatics/Alahaly/Alahaly.png')} style={{width :82 , height : 127 , marginHorizontal : 300 , marginVertical : -20  }}/>
            <Text style={{fontSize:55 , fontWeight : "bold" ,  marginVertical : -85 , marginHorizontal : 106 }}> 1  -   2</Text>
            <View style={{marginTop :'auto'}}>
            <Image source={require('../../../assets/imges/tatics/Alahaly/Al_Masry.png')} style={{width :88.44 , height : 89 , marginHorizontal : 15 , marginVertical : 20 }}/>
            <Image source={require('../../../assets/imges/tatics/Alahaly/Alahlystaticas.jpg')} style={{width :420 , height : 330 , marginHorizontal : -10 , marginVertical: -10 }}/>
            <Image source={require('../../../assets/imges/tatics/Alahaly/Alahalytatics.jpg')} style={{width :400 , height : 578 , marginHorizontal : -0 , marginVertical: -10 }}/>
            </View>
            </View>
            </ScrollView>
    )}