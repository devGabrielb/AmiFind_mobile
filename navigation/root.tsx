
import { NavigationContainer } from "@react-navigation/native"
import TabsNavigation from "./tabs";
import { createStackNavigator } from "@react-navigation/stack";
import DetailsPage from "../screens/details";
import { RootStackParamList } from "./navigation";
const Stack = createStackNavigator<RootStackParamList>()
const RootNavigation  = ()=>{
    return (
 <NavigationContainer>
      <Stack.Navigator initialRouteName="Main"
      screenOptions={{headerShown: false}}
      >
        <Stack.Screen name="Main" component={TabsNavigation} />
        <Stack.Screen name="DetailsPage" component={DetailsPage} />
      </Stack.Navigator>
    </NavigationContainer>
    )
};

export default RootNavigation