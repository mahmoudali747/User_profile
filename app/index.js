import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import Premierleague from "./Screens/Premierleague/Premierleague";
import Home from "./Screens/home/home";
import Spainleague from "./Screens/Spainleague/Spainleague";
import Italianleague from "./Screens/Italianleague/Italianleague";
import Germanleague from "./Screens/Germanleague/Germanleague";
import Egyptianleague from "./Screens/Egyptianleague/Egyptianleague";
import Arsenal from "./Screens/Premierleague/Arsenal ";
import Astonvilla from "./Screens/Premierleague/Astonvilla ";
import Chelsea from "./Screens/Premierleague/Chelsea";
import Liverpool from "./Screens/Premierleague/liverpool";
import Manchestercity from "./Screens/Premierleague/Manchestercity ";
import Manchesterunited from "./Screens/Premierleague/Manchesterunited";
import Atleticomadrid from "./Screens/Spainleague/Atleticomadrid";
import Barcelona from "./Screens/Spainleague/Barcelona";
import RealMadrid from "./Screens/Spainleague/RealMadrid";
import Inter from "./Screens/Italianleague/Inter";
import Juventus from "./Screens/Italianleague/Juventus";
import Milan from "./Screens/Italianleague/Milan";
import Napoli from "./Screens/Italianleague/Napoli ";
import Rome from "./Screens/Italianleague/Rome";
import BayernMunchen from "./Screens/Germanleague/BayernMunchen";
import Dortmund from "./Screens/Germanleague/Dortmund";
import Alahly from "./Screens/Egyptianleague/Alahly";
import Elzamalek from "./Screens/Egyptianleague/Elzamalek";
import Pyramids from "./Screens/Egyptianleague/Pyramids";
import UserProfile from "./Screens/UserProfile/UserProfile";
const Stack = createNativeStackNavigator();
const App = () => {
    return(
        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{headerShown : false ,}}>
            <Stack.Screen name="Home" component={Home}  />
                <Stack.Screen name="Premierleague" component={Premierleague}  />
                <Stack.Screen name="Spainleague" component={Spainleague}  />
                <Stack.Screen name="Italianleague" component={Italianleague}  />
                <Stack.Screen name="Germanleague" component={Germanleague}  />
                <Stack.Screen name="Egyptianleague" component={Egyptianleague}  />
                <Stack.Screen name="Arsenal" component={Arsenal}  />
                <Stack.Screen name="Astonvilla" component={Astonvilla}  />
                <Stack.Screen name="Chelsea" component={Chelsea}  />
                <Stack.Screen name="Liverpool" component={Liverpool}  />
                <Stack.Screen name="Manchestercity" component={Manchestercity}  />
                <Stack.Screen name="Manchesterunited" component={Manchesterunited}  />
                <Stack.Screen name="Atleticomadrid" component={Atleticomadrid}  />
                <Stack.Screen name="Barcelona" component={Barcelona}  />
                <Stack.Screen name="RealMadrid" component={RealMadrid}  />
                <Stack.Screen name="Inter" component={Inter}  />
                <Stack.Screen name="Juventus" component={Juventus}  />
                <Stack.Screen name="Milan" component={Milan}  />
                <Stack.Screen name="Napoli" component={Napoli}  />
                <Stack.Screen name="Rome" component={Rome}  />
                <Stack.Screen name="BayernMunchen" component={BayernMunchen}  />
                <Stack.Screen name="Dortmund" component={Dortmund}  />
                <Stack.Screen name="Alahly" component={Alahly}  />
                <Stack.Screen name="Elzamalek" component={Elzamalek}  />
                <Stack.Screen name="Pyramids" component={Pyramids}  />
                <Stack.Screen name="UserProfile" component={UserProfile}  />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default App ;