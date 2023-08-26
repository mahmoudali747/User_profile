import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import 'react-native-gesture-handler';
import Premierleague from '../Screens/Premierleague/Premierleague'
import Home  from '../index'
const screens ={
    Home : {
        screen: Home
    },
    Premierleague:{
    screen: Premierleague
}}

const HomeStack =createStackNavigator(screens);

export default createAppContainer(HomeStack);