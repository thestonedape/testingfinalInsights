import React, { useEffect, useRef, useState } from "react";
import { TouchableOpacity, Animated, Easing, useColorScheme } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import 'react-native-gesture-handler'

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';

import Icon from "react-native-vector-icons/FontAwesome5";
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

import HomeScreen from "./src/screens/HomeScreen";
import NewsScreen from "./src/screens/NewsScreen";
import Welcome from "./src/screens/Welcome";
import SaveScreen from "./src/screens/SaveScreen";
import DiscoverScreen from "./src/screens/DiscoverScreen";
import Find from "./src/screens/Find";
import Filtered from "./src/screens/Filtered";

import TweetsDetails from "./src/screens/TweetsDetails";
import DomainDetails from "./src/screens/DomainDetails";
import SchemeDetails from "./src/screens/SchemeDetails";

import DrawerContent from "./src/screens/DrawerContent";

import { NavigationContainer, DarkTheme, DefaultTheme } from "@react-navigation/native";
import { useSelector } from "react-redux";
import Splash from "./src/screens/Splash";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Default = () => {
  const [selectedTab, setSelectedTab] = useState("Home");
  const scale = useRef(new Animated.Value(1)).current;

  const theme = useSelector(state => state.theme) || 'Dark' ;

  const animateIcon = (tabName) => {
    if (tabName === selectedTab) {
      Animated.sequence([
        Animated.timing(scale, {
          toValue: 1.2,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 1,
          duration: 250,
          useNativeDriver: true,
        }),
      ]).start();
    }
  };
  

  useEffect(() => {
    animateIcon(selectedTab);
  }, [selectedTab]);

  const handleTabPress = (route, isFocused) => {
    if (isFocused) {
      setSelectedTab(route.name);
    }
    ReactNativeHapticFeedback.trigger('impactLight', options);
    
  };
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: 'slide',
        drawerStyle: {
          backgroundColor: theme === 'Dark' ? '#121212' : '#fff',
          width: 240,
        },
      }}>
      <Drawer.Screen name="Tabs">
        {() => (
          <Tab.Navigator
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarActiveTintColor: theme === 'Dark' ? '#fff' : '#000',
              tabBarInactiveTintColor: "gray",
              tabBarStyle: {
                backgroundColor: theme === 'Dark' ?  '#121212' : '#fff',
                borderTopColor: "transparent",
                height: 50,
                paddingTop: 5,
                paddingBottom: 5,
                shadowColor: theme === 'Dark' ? '#121212' : '#fff',
                shadowOffset: {
                  width: 0,
                  height: 10,
                },
                shadowOpacity: 0.53,
                shadowRadius: 13.97,
              },

              tabBarButton: (props) => {
                const { children, onPress } = props;
                return (
                  <TouchableOpacity
                    onPress={() => {
                      handleTabPress(route, true);
                      onPress();
                    }}
                    style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    {children}
                  </TouchableOpacity>
                );
              },
              tabBarShowLabel: false,


              tabBarIcon: ({ focused, color, }) => {
                let iconName;

                if (route.name === "Home") {
                  iconName = focused ? "home" : "home";
                } else if (route.name === "News") {
                  iconName = focused ? "newspaper" : "newspaper";
                } else if (route.name === "Discover") {
                  iconName = focused ? "globe" : "globe";
                } else if (route.name === "Saved") {
                  iconName = focused ? "thumbtack" : "thumbtack";
                }
                return (
                  <Animated.View style={{ transform: [{ scale: selectedTab === route.name ? scale : 1 }] }}>
                    <Icon name={iconName} size={22} color={color} />
                  </Animated.View>
                )
              },
            })}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Discover" component={DiscoverScreen} />
            <Tab.Screen name="News" component={NewsScreen} />
            <Tab.Screen name="Saved" component={SaveScreen} />
          </Tab.Navigator>
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};


const SignedIn = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  const theme = useSelector(state => state.theme) || 'Dark' ;

  useEffect(() => {
    async function checkIfFirstLaunch() {
      const alreadyLaunched = await AsyncStorage.getItem("alreadyLaunched");
      if (alreadyLaunched === null) {
        setIsFirstLaunch(true);
        await AsyncStorage.setItem("alreadyLaunched", "true");
      } else {
        setIsFirstLaunch(false);
      }
    }
    checkIfFirstLaunch();
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <NavigationContainer
      theme={theme === 'Dark' ? DarkTheme : DefaultTheme}
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: 'transparent' },
          cardOverlayEnabled: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      >
        {isFirstLaunch && ( 
          <Stack.Screen name="Welcome" component={Welcome} />
        )}
        <Stack.Screen name="Default" component={Default} />
        <Stack.Screen name="Find" component={Find} />
        <Stack.Screen name="Filtered" component={Filtered} />
        <Stack.Screen name="TweetsDetails" component={TweetsDetails} />
        <Stack.Screen name="DomainDetails" component={DomainDetails} />
        <Stack.Screen name="SchemeDetails" component={SchemeDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};




/* const SignedIn = () => {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? DarkTheme : DefaultTheme;
  return (
    <NavigationContainer
      theme={theme}
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: 'transparent' },
          cardOverlayEnabled: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Default" component={Default} />
        <Stack.Screen name="Find" component={Find} />
        <Stack.Screen name="Filtered" component={Filtered} />
        <Stack.Screen name="TweetsDetails" component={TweetsDetails} />
        <Stack.Screen name="DomainDetails" component={DomainDetails} />
        <Stack.Screen name="SchemeDetails" component={SchemeDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}; */



export default SignedIn;