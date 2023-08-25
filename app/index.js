import React,{useState} from "react";
import { View , Text , Image , TouchableOpacity } from 'react-native';
import edit from '../assets/imges/edit.png';
export default  function App (){
    return (
        <View>
        <TouchableOpacity>
            <Image source={require('../assets/imges/edit.png')} style={{width : 38 , height : 31 , marginVertical : 24 , marginHorizontal : 340}}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={require('../assets/imges/back.png')} style={{width : 108 , height : 72 , marginVertical : -73 , marginHorizontal :-28 }}/>
        </TouchableOpacity>
            <Image source={require('../assets/imges/messi.png')} style={{width : 195 , height :130 , marginTop : 10 , marginLeft :-10 }} />
            <Text style={{fontSize:40 , fontWeight : "bold" , color : '877DFA' , marginLeft : 170 , marginTop : -100 }}>Username</Text>
            <Image source={require('../assets/imges/call.png')} style={{width :29 , height : 19 , marginLeft : 21 , marginTop : 67}}/>
            <Text style={{fontSize:13 , color : "877DFA" , marginLeft :55 , marginTop : -17 }}>0114120411</Text>
            <Image source={require('../assets/imges/maill.png')} style={{width :42 , height : 28 , marginLeft : 16 , marginTop : 7}}/>
            <Text style={{fontSize:13 , color : "877DFA" , marginLeft :57 , marginTop : -25 }}>userEmail@gimal.com</Text>
            <Image source={require('../assets/imges/e.png')} style={{width :1042 , height : 516 , marginLeft : -100 , marginTop : -100}}/>
            <Image source={require('../assets/imges/follower.png')} style={{width :55 , height : 40 , marginLeft : 30 , marginTop : -365}}/>
            <Text style={{fontSize:15 , color : "877DFA" , marginLeft :26 , marginTop : 0 }}>Followers</Text>
            <Text style={{fontSize:40 , color : "877DFA" , marginLeft :129 , marginTop : -60 }}>0</Text>
            <Text style={{fontSize:40 , color : "877DFA" , marginLeft :280 , marginTop : -55 }}>Hi</Text>
            <TouchableOpacity>
            <Image source={require('../assets/imges/Heart.png')} style={{width :51 , height : 34 , marginLeft : 19 , marginTop : 50}}/>
            <Text style={{fontSize:20 , fontWeight : "bold" , color : '877DFA' , marginLeft : 80 , marginTop : -32 }}>Your Favorite teams</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={require('../assets/imges/Payment.png')} style={{width :90 , height : 60 , marginLeft : 0 , marginTop : 10}}/>
            <Text style={{fontSize:20 , fontWeight : "bold" , color : '877DFA' , marginLeft : 80 , marginTop : -40 }}>Payment</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={require('../assets/imges/Frindes.png')} style={{width :41 , height : 27 , marginLeft : 24 , marginTop : 30}}/>
            <Text style={{fontSize:20 , fontWeight : "bold" , color : '877DFA' , marginLeft : 80 , marginTop : -25 }}>Tell Tour Friends</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={require('../assets/imges/tech.png')} style={{width :62 , height : 41 , marginLeft : 15 , marginTop : 20}}/>
            <Text style={{fontSize:20 , fontWeight : "bold" , color : '877DFA' , marginLeft : 80 , marginTop : -30 }}>Technical support</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={require('../assets/imges/settings.png')} style={{width :43 , height : 36 , marginLeft : 25 , marginTop : 30}}/>
            <Text style={{fontSize:20 , fontWeight : "bold" , color : '877DFA' , marginLeft : 80 , marginTop : -30 }}>Settings</Text>
        </TouchableOpacity>
            <View style={{height : 1 , width : '100' , backgroundColor : '#ddd' , marginTop : 35}}  />
            <TouchableOpacity>
            <Image source={require('../assets/imges/Logout1.png')} style={{width :66 , height : 44 , marginLeft : 16 , marginTop : 20}}/>
            <Text style={{fontSize:20 , fontWeight : "bold" , color : 'FF2A4C' , marginLeft : 80 , marginTop : -35 }}>Settings</Text>
        </TouchableOpacity>           
        </View>

    )


} 
