import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import { allSchemes } from './data'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';



function DomainDetails({ route }) {
  const { domain } = route.params;
  const domainData = allSchemes.find((item) => item.domain === domain);
  const navigation = useNavigation();
  const theme = useSelector(state => state.theme) || 'Dark' ;
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme === 'Dark' ? "#121212" : "#fff",
      flex: 1,
      padding: 10,
    },
    section: {
      padding: 20,
    },
    title: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 20,
    },
    titleText: {
      color: theme === 'Dark' ? "#fff" : "#000",
      fontSize: 20,
      fontWeight: "bold",
    },
    subheader: {
      color: theme==='Dark'? "#fff" : "#000",
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 10,
    },
    schemesContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between'
    },
    schemeCard: {
      backgroundColor: theme === 'Dark' ? '#212121' : '#f0f0f0',
      borderRadius: 10,
      padding: 10,
      width: '48%',
      marginBottom: 20
    },
    schemeImage: {
      backgroundColor: theme === 'Dark' ? '#2b2b2b' : '#e0e0e0',
      borderRadius: 10,
      width: 70,
      height: 70,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10
    },
    schemeContent: {
      alignItems: 'center'
    },
    schemeTitle: {
      color: theme === 'Dark' ? '#fff' : '#000',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 16
    },
  });

  return (
    <View style={styles.container}>
      <ScrollView 
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingTop: 20,paddingBottom: 20 }}
      >
      <View style={styles.section}>
        <View style={styles.title}>
          <Text style={styles.titleText}>{domainData.domain}</Text>
        </View>
        <View style={styles.schemesContainer}>
          {domainData.schemes.map((scheme) => (
            <TouchableOpacity 
            onPress={() => navigation.navigate('SchemeDetails', { scheme: scheme })}
            key={scheme.id} 
            style={styles.schemeCard}>
              <View style={styles.schemeImage}>
              <Image source={{ uri: scheme.uri }} style={{ width: '100%', height: '100%',borderRadius:10 }} />
                
              </View>
              
              <View style={styles.schemeContent}>
                <Text style={styles.schemeTitle}>{scheme.title}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      </ScrollView>
    </View>
  );
}
export default DomainDetails





/* <Icon name={scheme.icon} 
                color={theme==='Dark' ? "#fff" : "#000"}
                size={30} />
                */


