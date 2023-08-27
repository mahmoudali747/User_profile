import React,{useState} from "react";
import { View , Text , Image , TouchableOpacity , Alert , TextInput , StyleSheet , ScrollView} from 'react-native';
export default  function Italianleague (){
    return (
        <ScrollView>
             <TouchableOpacity>
             <Image source={require('../../../assets/imges/messi.png')} style={{width : 77 , height : 51 , marginVertical : 20 , marginHorizontal : 315  }}/>
             </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../../assets/imges/notfication.png')} style={{width : 44 , height : 30 , marginVertical : -55 , marginHorizontal : 280  }}/>
             </TouchableOpacity>
             <TouchableOpacity>
            <Image source={require('../../../assets/imges/back.png')} style={{width : 108 , height : 72 , marginVertical : -73 , marginHorizontal :-28 }}/>
        </TouchableOpacity>
            <Image source={require('../../../assets/imges/Italian-Serie-A-Logo.png')} style={{width :76 , height : 76 , marginLeft : 100 , marginTop : -70}}/>
            <Text style={{fontSize:20 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 180 , marginTop : -60 }}>Serie A</Text>
            <Text style={{fontSize:18 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 180 , marginTop : 0 }}>league</Text>
            <TouchableOpacity>
             <Image source={require('../../../assets/imges/Juventus_Logo.png')} style={{width :106 , height : 120 , marginLeft :20 , marginTop : 50}}/>
             <Text style={{fontSize:55 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 135 , marginTop : -100 }}>Juventus</Text>
             </TouchableOpacity>
             <TouchableOpacity>
             <Image source={require('../../../assets/imges/Neapel.png')} style={{width :108 , height : 108 , marginLeft :20 , marginTop : 45}}/>
             <Text style={{fontSize:55 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 140 , marginTop : -100 }}>Napoli </Text>
             </TouchableOpacity>
             <TouchableOpacity>
             <Image source={require('../../../assets/imges/Inter.png')} style={{width :108 , height : 108 , marginLeft :20 , marginTop : 50}}/>
             <Text style={{fontSize:55 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 142 , marginTop : -100 }}>Inter </Text>
             </TouchableOpacity>
             <TouchableOpacity>
             <Image source={require('../../../assets/imges/Milan.png')} style={{width :75 , height : 119 , marginLeft :35 , marginTop : 50}}/>
             <Text style={{fontSize:55 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 142 , marginTop : -100 }}>Milan </Text>
             </TouchableOpacity>
             <View style={{height:150}}>
             <TouchableOpacity>
             <Image source={require('../../../assets/imges/as-roma-logo.png')} style={{width :73 , height : 89.89 , marginLeft :35 , marginTop : 50}}/>
             <Text style={{fontSize:55 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 142 , marginTop : -100 }}>Rome </Text>
             </TouchableOpacity>
             </View>
        </ScrollView>
        )}