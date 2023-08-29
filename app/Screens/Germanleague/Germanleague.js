import React,{useState} from "react";
import { useNavigation } from "expo-router";
import { View , Text , Image , TouchableOpacity , Alert , TextInput , StyleSheet , ScrollView} from 'react-native';
export default  function Germanleague (){
    const navigation =useNavigation();
    return (
        <View>
             <TouchableOpacity onPress={()=> navigation.navigate('UserProfile')}>
             <Image source={require('../../../assets/imges/messi.png')} style={{width : 77 , height : 51 , marginVertical : 20 , marginHorizontal : 315  }}/>
             </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../../assets/imges/notfication.png')} style={{width : 44 , height : 30 , marginVertical : -55 , marginHorizontal : 280  }}/>
             </TouchableOpacity>
             <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Image source={require('../../../assets/imges/back.png')} style={{width : 108 , height : 72 , marginVertical : -73 , marginHorizontal :-28 }}/>
        </TouchableOpacity>
        <Image source={require('../../../assets/imges/germanleague.png')} style={styles.HeaderStyle}/>
             <Text style={{fontSize:20 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 170 , marginTop : -60 }}>bundesliga</Text>
             <Text style={{fontSize:18 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 170 , marginTop : 0 }}>league</Text>
             <TouchableOpacity onPress={()=> navigation.navigate('BayernMunchen')}>
             <Image source={require('../../../assets/imges/BayernMunchen.png')} style={{width :106 , height : 108 , marginLeft : 25 , marginTop :50}}/>
             <Text style={{fontSize:45 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 140 , marginTop : -115 }}>Bayern</Text>
             <Text style={{fontSize:55 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 140 , marginTop : -20 }}>München</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('Dortmund')}>
             <Image source={require('../../../assets/imges/BorussiaDortmund_.png')} style={{width :106 , height : 108 , marginLeft : 25 , marginTop :50}}/>
             <Text style={{fontSize:45 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 140 , marginTop : -115 }}>Borussia</Text>
             <Text style={{fontSize:55 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 140 , marginTop : -20 }}>Dortmund</Text>
            </TouchableOpacity>
        </View>
    )}
    const styles =StyleSheet.create({
                  HeaderStyle:{
                    width :69 ,
                     height : 69 , 
                     marginLeft : 100 ,
                      marginTop : -70 ,
                  }
              })
          
        
        
        