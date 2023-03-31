import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { allSchemes, popularSchemes } from './data';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const HomeScreen = () => {
  const navigation = useNavigation();
  const handleMenuIconPress = () => {
    navigation.openDrawer();
  };
  const theme = useSelector(state => state.theme) || 'Dark';
  console.log(theme);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme === 'Dark' ? '#121212' : '#fff',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingVertical: 10,
      backgroundColor: theme === 'Dark' ? '#121212' : '#fff',
    },
    menuIcon: {
      color: theme === 'Dark' ? '#fff' : '#000',
      fontSize: 25,
    },
    appBarTitle: {
      color: theme === 'Dark' ? '#fff' : '#000',
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft: 10,
      textAlign: 'center'
    },
    Toptext: {
      backgroundColor: theme === 'Dark' ? '#121212' : '#fff',
      alignItems: 'center',
      width: '80%',
      paddingHorizontal: 20,
      marginBottom: 20,
      borderRadius: 10,
    },
    imageSlider: {
      height: 200,
      backgroundColor: theme === 'Dark' ? '#121212' : '#fff',
      paddingHorizontal: 20,
      marginBottom: 20,
      borderRadius: 10,
      marginTop: 20,
      overflow: 'hidden'
    },
    sliderImage: {
      height: 200,
      width: 300,
      resizeMode: 'cover',
      borderRadius: 10,
      marginHorizontal: 10,
    },
    banner: {
      backgroundColor: theme === 'Dark' ? '#212121' : '#f0f0f0',
      marginHorizontal: 20,
      marginBottom: 20,
      borderRadius: 10,
      paddingVertical: 10,
      marginTop: 20,
    },
    bannerContent: {
      alignItems: 'center'
    },
    bannerTitle: {
      color: theme === 'Dark' ? '#fff' : '#000',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginVertical: 10
    },
    bannerDescription: {
      color: theme === 'Dark' ? '#fff' : '#000',
      textAlign: 'center'
    },
    section: {
      padding: 20
    },
    subheader: {
      color: theme === 'Dark' ? '#fff' : '#000',
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10
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
    schemeIcon: {
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
      textAlign: 'center'
    },
    schemeCount: {
      color: theme === 'Dark' ? '#fff' : '#000',
    },
    title: {
      padding: 20,
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity onPress={handleMenuIconPress}>
        <Icon name="menu" style={styles.menuIcon} />
      </TouchableOpacity>
        <Text style={styles.appBarTitle}>Insights</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: 20,paddingBottom: 20 }}
      >
        <View style={styles.Toptext}>
          <Text style={{
            color: theme === 'Dark' ? '#fff' : '#000',
            fontFamily: 'druk-wide-bold',
            fontSize: 30
          }}>
            Find the best government policies for you
          </Text>
        </View>
        <View style={styles.imageSlider}>
          <FlatList
            data={allSchemes}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('DomainDetails', { domain: item.domain })}>
                <Image source={{ uri: item.uri }} style={styles.sliderImage} />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Find')}
          style={styles.banner}>
          <View style={styles.bannerContent}>
            <Text style={{
              color: theme === 'Dark' ? '#fff' : '#000',
              fontSize: 20,
              fontWeight: 'bold'
            }}>Welcome to Insights</Text>
            <Text style={{
              color: theme === 'Dark' ? '#fff' : '#000',
              fontSize: 14,
              marginTop: 10
            }}>Find & apply for government schemes</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.title}>
          <Text style={{
            color: theme === 'Dark' ? '#fff' : '#000',
            fontSize: 20,
            fontWeight: 'bold'
          }}>Popular Schemes</Text>
        </View>
        <View style={styles.section}>
          <View style={styles.schemesContainer}>
            {popularSchemes.map((scheme) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('SchemeDetails', { scheme: scheme })
                }}
                key={scheme.id}
                style={styles.schemeCard}>
                <View style={styles.schemeIcon}>
                  <Icon name={scheme.icon}
                    color={theme === 'Dark' ? '#fff' : '#000'}
                    size={30} />
                </View>
                <View style={styles.schemeContent}>
                  <Text style={styles.schemeTitle}>{scheme.title}</Text>
                  <Text style={styles.schemeCount}>{scheme.count}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={styles.title}>
          <Text style={{
            color: theme === 'Dark' ? '#fff' : '#000',
            fontSize: 20,
            fontWeight: 'bold'
          }}>All Schemes</Text>
        </View>
        <View style={styles.section}>
          {allSchemes.map((scheme) => (
            <View key={scheme.id}>
              <View style={styles.title}>
                <Text style={{
                  color: theme === 'Dark' ? '#fff' : '#000',
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginBottom: 10
                }}>{scheme.domain}</Text>
              </View>
              <View style={styles.schemesContainer}>
                {scheme.schemes.map((scheme) => (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('SchemeDetails', { scheme: scheme })}
                    key={scheme.id}
                    style={styles.schemeCard}>
                    <View style={styles.schemeIcon}>
                      <Icon name={scheme.icon}
                        color={theme === 'Dark' ? '#fff' : '#000'}
                        size={30} />
                    </View>
                    <View style={styles.schemeContent}>
                      <Text style={styles.schemeTitle}>{scheme.title}</Text>
                      <Text style={styles.schemeCount}>{scheme.count}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;


