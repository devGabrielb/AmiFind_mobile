
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/home/home";
import SearchScreen from "../screens/search/search";
const Stack = createStackNavigator()
const HomeNavigation  = ()=>{
    return (
      <Stack.Navigator initialRouteName="HomeScreen"

      screenOptions={{headerShown: false}}

      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen}/>
        
      </Stack.Navigator>
    )
};

export default HomeNavigation
