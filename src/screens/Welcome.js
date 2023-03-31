import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, StatusBar, } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import { useSelector } from 'react-redux';
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const Welcome = ({ navigation }) => {
  const handleGetStarted = () => {
    navigation.navigate('Default');
    ReactNativeHapticFeedback.trigger('impactLight', options);
  };

  const theme = useSelector(state => state.theme) || 'Dark';
  const [pressed, setPressed] = React.useState(false);

  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 10,
          duration: 1600,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [animation]);
  const translateY = useRef(new Animated.Value(0)).current;
  const handlePressIn = () => {
    setPressed(true);
    Animated.timing(translateY, {
      toValue: -5,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };
  
  const handlePressOut = () => {
    setPressed(false);
    Animated.timing(translateY, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const animatedStyle = {
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 5],
          outputRange: [0, 8],
        }),
      },
    ],
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme === 'Dark' ? '#121212' : '#F7F7F7',
      justifyContent: 'center',
      alignItems: 'center',
    },
    HeadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      color: theme === 'Dark' ? '#fff' : '#000',
    },
    textContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 30,
      width: '80%',
      color: theme === 'Dark' ? '#fff' : '#000',
    },
    title: {
      fontSize: 48,
      textAlign: 'center',
      marginBottom: 20,
      letterSpacing: 2.5,
      fontFamily: 'MontserratAlt1-ExtraLight',
      color: theme === 'Dark' ? '#fff' : '#000',
    },
    title2: {
      fontSize: 28,
      textAlign: 'center',
      marginBottom: 10,
      letterSpacing: 2.5,
      color: '#A0B22D',
    },
    slogan: {
      fontSize: 18,
      textAlign: 'center',
      letterSpacing: 1.5,
      fontFamily: 'MontserratAlt1-Light',
      color: theme === 'Dark' ? 'grey' : '#000',
  
    },
    NeoPopButton: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 50,
      elevation: 20,
      shadowColor: theme === 'Dark' ? '#FFC6D4' : '#000',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.5,
      shadowRadius: 10,
      borderLeftWidth: 15,
      borderLeftColor: "transparent",
      borderRightWidth: 15,
      borderRightColor: "transparent",
      width : 270,
    },
    trapezoid: {
      width: 250,
      height: 200,
    },
    button: {
      width: 350,
      height: 50,
      backgroundColor: theme === 'Dark' ? '#121212' : '#F7F7F7',
      borderRadius: 0,
      transform: [{ skewX: '-30deg' }, { perspective: 5 }],
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.HeadingContainer}>
        <Text style={styles.title}>INSIGHTS</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.slogan}>Empowering and supporting every citizen</Text>
      </View>
      <Animated.View style={[styles.NeoPopButton, animatedStyle]}>
        <TouchableWithoutFeedback
          onPress={handleGetStarted}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          style={{
            width: 300,
            height: 60,
            borderBottomWidth: 60,
            borderBottomColor: theme === 'Dark' ? '#ffffff' : '#1E1E1E',
            borderLeftWidth: 20,
            borderLeftColor: "transparent",
            borderRightWidth: 20,
            borderRightColor: "transparent",
            justifyContent: 'center',
            alignItems: 'center',
            transform: [{ translateY: translateY }],
          }}>
          <Text style={{ color: theme === 'Dark' ? 'black' : 'white', position: 'absolute', fontSize: 20, fontWeight:'bold', textAlign: 'center', transform: [{ perspective: 200 }, { rotateX: '30deg' }], marginTop: 10 }}>Get Started</Text>
        </TouchableWithoutFeedback>
        <View
          style={{
            width: 300,
            height: 10,
            borderBottomWidth: 10,
            borderBottomColor: theme === 'Dark' ? "#C0C0C0" : '#000000',
            borderLeftWidth: 5,
            borderLeftColor: "transparent",
            borderRightWidth: 5,
            borderRightColor:  "transparent",
            transform: [{ rotate: '180deg' }],
            
          }} />
      </Animated.View>
    </View>
  );
};

export default Welcome;