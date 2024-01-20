import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { StyleSheet, View } from 'react-native';
import HomeNavigation from './home';
const Tab  = createBottomTabNavigator()
const TabsNavigation = ()=> {
  return (
    <Tab.Navigator

      screenOptions={
      
      {
        tabBarStyle:{
          height: 70,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        },
        tabBarActiveTintColor:"black",
        headerShown: false,
        tabBarIconStyle:{height: 30},
        unmountOnBlur: true
        
      }

      }>
        <Tab.Screen name='Home' 
        component={HomeNavigation}
        options={{
          tabBarLabel:"Main",
          tabBarIcon:({focused,size}) =>{
            return(
              <View>
            <Ionicons
              style={styles(focused).iconContainer} 
              name={"search-outline"} 
              size={size}
              />
              </View>
            )
          }
        }}
        />
        <Tab.Screen name='NewAd' 
        component={HomeNavigation}
        options={{
          
          tabBarIcon:({focused,size}) =>{
            return(
            <Ionicons
            style={styles(focused).iconContainer}
              name={"add-circle-outline"} 
              size={size}
              />

              )
          }
        }}
        />
        <Tab.Screen name='Settings' 
        component={HomeNavigation}
        options={{
          
          tabBarIcon:({focused,size}) =>{
            return(
            <Ionicons
            style={styles(focused).iconContainer}
              name={"settings-outline"} 
              size={size}
              />

              )
          }
        }}
        
        />
    
    </Tab.Navigator>
    );
}

const styles = (focused:boolean) =>StyleSheet.create({
  iconContainer:{
    borderWidth: 1,
    borderRadius: 8,
    borderColor:focused?"yellow":"#F1F2F6",
    backgroundColor: focused ?"yellow":undefined,

    textAlign:"center",
    padding: 5,
  }
})
export default TabsNavigation;