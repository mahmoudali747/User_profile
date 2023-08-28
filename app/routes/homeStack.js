import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import NavigationContainer from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Premierleague from '../Screens/Premierleague/Premierleague'
import App from "../index";
const screens ={
    Home : {
        screen: App
    },
    Premierleague:{
    screen: Premierleague
}}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);