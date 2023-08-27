import React,{useState} from "react";
import { View , Text , Image , TouchableOpacity , Alert , TextInput , StyleSheet , ScrollView} from 'react-native';
export default  function Premierleague (){
    return (
        <ScrollView>
        <TouchableOpacity>
            <Image source={require('../../../assets/imges/messi.png')} style={{width : 77 , height : 51 , marginVertical : 24 , marginHorizontal : 315}}/>
        </TouchableOpacity> 
        <TouchableOpacity>
            <Image source={require('../../../assets/imges/back.png')} style={{width : 108 , height : 72 , marginVertical : -90 , marginHorizontal :-28 }}/>
        </TouchableOpacity>
        <Image source={require('../../../assets/imges/EnglishPremierLeague.png')} style={{width :76 , height : 76 , marginLeft : 100 , marginTop : -70}}/>
            <Text style={{fontSize:20 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 180 , marginTop : -60 }}>Premier</Text>
            <Text style={{fontSize:18 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 180 , marginTop : -5 }}>league</Text>
            <TouchableOpacity>
            <Image source={require('../../../assets/imges/notfication.png')} style={{width : 44 , height : 30 , marginVertical : -175 , marginHorizontal : 280  }}/>
              </TouchableOpacity>
             <Image source={require('../../../assets/imges/Arsenal.png')} style={{width :100 , height : 118 , marginLeft : 30 , marginTop : 20}}/>
             <Text style={{fontSize:55 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 140 , marginTop : -110 }}>Arsenal</Text>
            <TouchableOpacity>
             <Image source={require('../../../assets/imges/Astonvella.png')} style={{width :93 , height : 130 , marginLeft : 35 , marginTop : 50}}/>
             <Text style={{fontSize:55 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 140 , marginTop : -135 }}>Aston</Text>
             <Text style={{fontSize:48 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 140 , marginTop : -20 }}>villa</Text>
            </TouchableOpacity>
            <TouchableOpacity>
             <Image source={require('../../../assets/imges/Chelsea.png')} style={{width :121 , height : 121 , marginLeft : 20 , marginTop : 30}}/>
             <Text style={{fontSize:55 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 140 , marginTop : -100 }}>Chelsea</Text>
            </TouchableOpacity>
            <TouchableOpacity>
             <Image source={require('../../../assets/imges/liverpool.png')} style={{width :133 , height : 133 , marginLeft : 15 , marginTop : 30}}/>
             <Text style={{fontSize:55 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 140 , marginTop : -100 }}>Liverpool</Text>
            </TouchableOpacity>
            <TouchableOpacity>
             <Image source={require('../../../assets/imges/manchCitey.png')} style={{width :120 , height : 120 , marginLeft : 20 , marginTop : 55}}/>
             <Text style={{fontSize:45 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 140 , marginTop : -115 }}>Manchester</Text>
             <Text style={{fontSize:55 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 140 , marginTop : -20 }}>city</Text>
            </TouchableOpacity>
            <View style={{height:200}}>
            <TouchableOpacity>
             <Image source={require('../../../assets/imges/manchUnited.png')} style={{width :148 , height : 148.06 , marginLeft : 5 , marginTop : 20}}/>
             <Text style={{fontSize:45 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 140 , marginTop : -115 }}>Manchester</Text>
             <Text style={{fontSize:55 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 140 , marginTop : -20 }}>united</Text>
            </TouchableOpacity>
            </View>
            </ScrollView>
                    )
                }