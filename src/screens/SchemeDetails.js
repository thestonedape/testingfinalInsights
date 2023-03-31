import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Linking,} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { addToSavedSchemes,removeSavedSchemes, } from '../redux/action/action';  

import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import { useState } from 'react';

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const SchemeDetails = ({ route }) => {
  const scheme = route.params.scheme;
  const theme = useSelector((state) => state.theme) || 'Dark';
  const dispatch = useDispatch();
  
  const savedSchemes = useSelector(state => state.savedSchemes.savedSchemes);
  
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const isSaved = savedSchemes.find((item) => item.id === scheme.id);
    if (isSaved) {
      setIsSaved(true);
    } else {
      setIsSaved(false);
    }
  }, [savedSchemes]);


  const handleSave = () => {
    ReactNativeHapticFeedback.trigger('impactLight', options);
    dispatch(addToSavedSchemes(scheme));
    setIsSaved(true);
  };

  const handleUnsave = () => {
    ReactNativeHapticFeedback.trigger('impactLight', options);
    dispatch(removeSavedSchemes(scheme));
    setIsSaved(false);
  };


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme==='Dark' ? '#121212' : '#fff',
    },
    header: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingVertical: 10,
      color:theme==='Dark' ? '#fff' : '#000',
      borderBottomColor:theme==='Dark' ? '#333' : '#ddd',
      borderBottomWidth: 1,
      
    },
    headerTitle: {
      fontSize: 24,
      color: theme==='Dark' ?'#fff' : '#000',
      fontWeight: 'bold',
    },
    image: {
      margin: 10,
      height: 300,
      resizeMode: 'cover',
    },
    content: {
      padding: 20,
      marginBottom: 20,
      
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 10,
      color: theme==='Dark' ? '#fff' : '#000',
      alignSelf: 'flex-start',
    },
    countContainer: {
      backgroundColor:theme==='Dark' ? '#333' : '#ddd',
      alignSelf: 'flex-end',
      paddingHorizontal: 10,
      borderRadius: 5,
      marginBottom: 10,
      paddingVertical: 5,
    },
    count: {
      fontSize: 16,
      fontWeight: 'bold',
      color: theme==='Dark' ? '#000' : '#fff',
    },
    description: {
      fontSize: 16,
      lineHeight: 24,
      paddingVertical: 10,
      marginBottom: 20,
      color: theme==='Dark' ? '#ddd' : '#000',
    },
  
  });

  console.log(scheme);
  
  return (
    <View style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingTop: 20, paddingBottom: 20 }}>
        <Text style={styles.header}>Scheme Details</Text>
        <Image source={{ uri: scheme.uri }} style={styles.image} />
        <View style={styles.content}>
          <View style={{ flexDirection: 'row', padding: 10 }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.title}>{scheme.title}</Text>
            </View>

            <TouchableOpacity style={styles.countContainer} onPress={isSaved ? handleUnsave : handleSave}>
              <Icon name="bookmark" size={20} color={isSaved ? '#fff' : theme === 'Dark' ? '#fff' : '#000'} solid={isSaved} />
            </TouchableOpacity>
          </View>
          <Text style={styles.description}>{scheme.description}</Text>
        </View>
      </ScrollView>
      <TouchableOpacity
          onPress={() => Linking.openURL(scheme.uri)}
          style={{
            backgroundColor: theme==='Dark' ? '#fff' : '#000',
            padding: 10,
            borderRadius: 10,
            width: '60%',
            alignItems: 'center',
            alignSelf: 'center',
            marginBottom: 20,
            marginTop: 20,
            zIndex: 100,
          }}
        >
          <Text style={{ color: theme==='Dark' ? '#000' : '#fff', fontSize: 18, fontWeight: 'bold' }}>
            Apply Now
          </Text>
        </TouchableOpacity>
    </View>
  );
};

export default SchemeDetails;
