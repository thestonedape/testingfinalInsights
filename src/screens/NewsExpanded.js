import { View, Text,StyleSheet, Image, } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';

const NewsExpanded = ({route}) => {
  const {item} = route.params;
  const theme = useSelector(state => state.theme) || 'Dark' ;
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme === 'Dark' ? '#121212' : '#fff',
      flex: 1,
      padding: 10,
    },
    text: {
      color:  theme === 'Dark' ?'#fff' : '#000',
      fontSize: 16,
      lineHeight: 24,
    },
    header: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingVertical: 10,
      color: theme === 'Dark' ? '#fff' : '#000',
      borderBottomColor: theme === 'Dark' ? '#333' : '#ddd',
      borderBottomWidth: 1,
    },
    image: {
      margin: 10,
      height: 300,
      resizeMode: 'cover',
      borderRadius: 10,
    },
    content: {
      padding: 20,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 10,
      color:  theme === 'Dark' ?'#fff' : '#000',
    },
    description: {
      fontSize: 16,
      lineHeight: 24,
      color:  theme === 'Dark' ?'#fff' : '#000',
    },
  
  });
  return (
    <View style={styles.container}>
    <ScrollView
      showsVerticalScrollIndicator={false} 
      contentContainerStyle={{ paddingTop: 20,paddingBottom: 20 }}
    >
      <Text style={styles.header}>Details</Text>
      <Image source={{uri:item.urlToImage}} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      </ScrollView>
    </View>
  );
};

export default NewsExpanded

