import React,{useState} from "react";
import { View , Text , Image , TouchableOpacity , Alert , TextInput , StyleSheet , ScrollView} from 'react-native';
export default  function Egyptianleague (){
    return (
        <View>
             <TouchableOpacity>
             <Image source={require('../../../assets/imges/messi.png')} style={{width : 77 , height : 51 , marginVertical : 10 , marginHorizontal : 315  }}/>
             </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../../assets/imges/notfication.png')} style={{width : 44 , height : 30 , marginVertical : -45 , marginHorizontal : 280  }}/>
             </TouchableOpacity>
             <TouchableOpacity>
            <Image source={require('../../../assets/imges/back.png')} style={{width : 108 , height : 72 , marginVertical : -73 , marginHorizontal :-28 }}/>
        </TouchableOpacity>
        <Image source={require('../../../assets/imges/egyptian.png')} style={{width :69 , height : 69 , marginLeft : 100 , marginTop : -70}}/>
             <Text style={{fontSize:20 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 170 , marginTop : -60 }}>Egyptian</Text>
             <Text style={{fontSize:18 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 170 , marginTop : 0 }}>league</Text>
             <TouchableOpacity>
             <Image source={require('../../../assets/imges/Alahaly.png')} style={{width :95 , height : 146 , marginLeft : 25 , marginTop :50}}/>
             <Text style={{fontSize:45 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 140 , marginTop : -115 }}>Alahly</Text>
            </TouchableOpacity>
            <TouchableOpacity>
             <Image source={require('../../../assets/imges/Alzmalk.png')} style={{width :92.58 , height : 121 , marginLeft : 25 , marginTop :70}}/>
             <Text style={{fontSize:45 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 140 , marginTop : -115 }}>Elzamalek</Text>
            </TouchableOpacity>
            <TouchableOpacity>
             <Image source={require('../../../assets/imges/Pyramids.png')} style={{width :113 , height : 108 , marginLeft : 20 , marginTop :70}}/>
             <Text style={{fontSize:45 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 140 , marginTop : -90 }}>Pyramids</Text>
            </TouchableOpacity>
            
        </View>
    )}