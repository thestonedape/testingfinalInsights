import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, Switch, ToastAndroid, TouchableOpacity, Linking } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../redux/action/action';

import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

import firestore from '@react-native-firebase/firestore';

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};
const DrawerContent = () => {
  const [isHindi, setIsHindi] = useState(false);
  const [version , setVersion] = useState('1.0.0');

  const theme = useSelector(state => state.theme) || 'Dark';
  console.log(theme);
  const dispatch = useDispatch();

  const toggleLightMode = useCallback(() => {
    ReactNativeHapticFeedback.trigger('impactLight', options);
    dispatch(changeTheme(theme === 'Dark' ? 'Light' : 'Dark'));
  }, [theme]);

  const toggleLanguage = useCallback(() => {
    ReactNativeHapticFeedback.trigger('impactLight', options);
    setIsHindi(prevIsHindi => !prevIsHindi);
    ToastAndroid.show(
      'gonna add this feature soon!',
      ToastAndroid.SHORT,

    );
  }, []);

  
  const handleCheck = async () => {
    try {
      ToastAndroid.show(
        'Checking for updates...',
        ToastAndroid.SHORT
      );

      const snapshot = await firestore().collection("version").doc("version").get();
      if (snapshot.exists) {
        const versionData = snapshot.data();
        const currentVersion = version;
        const latestVersion = versionData.version;
        if (latestVersion !== currentVersion) {
          Linking.openURL(versionData.download);
          ToastAndroid.show(
            'Downloading latest version...',
            ToastAndroid.SHORT);
        } else {
          ToastAndroid.show(
            'You are up to date!',
            ToastAndroid.SHORT);
        }
      }
    } catch (error) {
      console.log(error);
      ToastAndroid.show(
        'Error occurred. Please try again later.',
        ToastAndroid.SHORT);
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme === 'Light' ? '#f0f0f0' : '#121212',
      padding: 20,
    },
    title: {
      color: theme === 'Light' ? '#000' : '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    switchRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20,
      marginTop: 20,
    },
    switchText: {
      color: theme === 'Light' ? '#000' : '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    languageText: {
      color: theme === 'Light' ? '#000' : '#fff',
      fontSize: 16,
    },
    separator: {
      height: 1,
      backgroundColor: theme === 'Light' ? '#ddd' : '#606060',
      marginTop: 10,
      marginBottom: 20,
    },
    footer: {
      alignItems: 'center',
      marginTop: 'auto',
      marginBottom: 20,
    },
    footerText: {
      color: theme === 'Light' ? '#000' : '#fff',
      fontSize: 12,
      marginBottom: 5,
    },
  });
 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <View style={styles.switchRow}>
        <Text style={styles.switchText}>
          {theme === 'Light' ? 'Dark Mode' : 'Light Mode'}
        </Text>
        <Switch value={theme === 'Light'} onValueChange={toggleLightMode} />
      </View>

      <View style={styles.separator} />

      <Text style={styles.switchText}>Language</Text>

      <View style={styles.switchRow}>
        <Text style={styles.languageText}>
          {isHindi ? 'हिंदी' : 'English'}
        </Text>
        <Switch value={isHindi} onValueChange={toggleLanguage} />
      </View>

      <View style={styles.separator} />

      <TouchableOpacity
        style={{
          backgroundColor: theme === 'Light' ? '#ddd' : '#606060',
          padding: 10,
          borderRadius: 5,
          alignItems: 'center',
          marginBottom: 20,
        }}
        onPress={handleCheck}
      >
        <Text
          style={{
            color: theme === 'Light' ? '#000' : '#fff',
          }}
        >
          Check for Updates
        </Text>
      </TouchableOpacity>


      <View style={styles.footer}>
        <Text style={styles.footerText}>Version {version}</Text>
        <Text style={styles.footerText}>Made with ❤️</Text>
        <Text style={styles.footerText}>Backed by Inside Labs </Text>
      </View>
    </View>
  );
};

export default DrawerContent;
