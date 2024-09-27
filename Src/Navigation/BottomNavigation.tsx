
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../Screens/Home';
import SearchScren from '../Screens/SearchScreen';
import LibraryScreen from '../Screens/Library';
import PreniumScreen from '../Screens/Prenium';
import HomePlaylistScreenStack from './HomePlaylistScreenStack';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View } from 'react-native';


const Tab = createBottomTabNavigator();

function BottomTabNavigation() {
  return (
   <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#ffffff',
          tabBarInactiveTintColor: '#6e6060',

          tabBarLabelStyle: { fontSize: 14 },
          tabBarStyle: {
         
            position: 'absolute',
            borderTopWidth: 0,
            left: 0,
            right: 0,
            bottom: 0,
            elevation: 5,
            shadowColor: 'rgba(0, 0, 0, 0.2)',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.1,
            shadowRadius: 4,
          },
          headerShown: false,
          tabBarBackground: () => (
            <View style={{ flex: 1 }}>
              <LinearGradient
              
                colors={["#55555500","#161616ff",]}
                style={{ height: 50 }}
              />
            </View>
          ),
        }}
        
        >
        <Tab.Screen
          name="Home Screen"
          component={HomePlaylistScreenStack}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              return (
                <Ionicons name='home' color={color} size={size} />
              );
            },
            tabBarLabel: 'Home',
          }} />
        <Tab.Screen
          name="SearchScreen"
          component={SearchScren}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              return (
                <Ionicons name='search' color={color} size={size} />
              );
            },
            tabBarLabel: 'Search',
          }} />
        {/* <Tab.Screen
      name="LibraryScreen"
      component={LibraryScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          return (
            <Ionicons name="library-outline" color={color} size={size} />
          )
        },
        tabBarLabel: 'Your Library',
      }}
    />
    <Tab.Screen
      name="PreniumScreen"
      component={PreniumScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          return (
            <Ionicons name="radio-outline" color={color} size={size} />
          )
        },
        tabBarLabel: 'Prenium',
      }}
    /> */}
      </Tab.Navigator>
  );
}

export default BottomTabNavigation