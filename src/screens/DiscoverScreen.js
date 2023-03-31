
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, ScrollView, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { allSchemes, popularSchemes, tweets } from './data';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const DiscoverScreen = () => {
  const theme = useSelector(state => state.theme) || 'Dark';
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme === 'Dark' ? '#121212' : '#F7F7F7',
    },
    imageSlider: {
      height: 200,
      backgroundColor: theme === 'Dark' ? '#121212' : '#F7F7F7',
      marginHorizontal: 20,
      marginBottom: 20,
      borderRadius: 10,
      marginTop: 20,
      overflow: 'hidden',
    },
    sliderImage: {
      height: 200,
      width: 300,
      resizeMode: 'cover',
      borderRadius: 10,
      marginHorizontal: 10,
    },
    tweetsContainer: {
      padding: 10,
      flex: 1,
    },
    tweetsHeader: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 10,
      color: theme === 'Dark' ? "#fff" : "#000",
    },
    cardContainer: {
      backgroundColor: theme === 'Dark' ? "#272727" : "#F7F7F7",
      borderRadius: 10,
      padding: 10,
      margin: 10,
      width: 320,
      height: "auto",
    },
    domainContainer: {
      flexDirection: "column",
      marginBottom: 10,
    },
    domainHeader: {
      fontWeight: "bold",
      marginBottom: 10,
      fontSize: 20,
      color: theme === 'Dark' ? "#fff" : "#000",
    },
    tweetContainer: {
      backgroundColor: theme === 'Dark' ? '#272727' : '#fff',
      borderRadius: 10,
      padding: 10,
      marginBottom: 20,
      borderBottomWidth: 1,
      borderBottomColor: theme === 'Dark' ? "#bbb" : "#000",
      flexDirection: "row",
    },
    
    tweetText: {
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 5,
      color: theme === 'Dark' ? "#fff" : "#000",
    },
    tweetUser: {
      fontSize: 14,
      color: theme === 'Dark' ? "#ccc" : "#000",
      letterSpacing: 0.5,
    },
    twitterIcon: {
      width: 50,
      height: 50,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
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
      color: theme === 'Dark' ? "#fff" : "#000",
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 10,
    },
    schemesContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },
    schemeCard: {
      width: "48%",
      backgroundColor: theme === 'Dark' ? "#272727" : "#F0F0F0",
      borderRadius: 10,
      padding: 10,
      marginBottom: 20,
      flexDirection: "row",
      alignItems: "center",
    },
    schemeIcon: {
      width: 50,
      height: 50,
      backgroundColor: theme === 'Dark' ? "#1E1E1E" : "#E0E0E0",
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      marginRight: 10,
    },
    schemeContent: {
      flex: 1,
    },
    schemeTitle: {
      color: theme === 'Dark' ? "#fff" : "#000",
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 5,
    },
    schemeDescription: {
      color: theme === 'Dark' ? "#fff" : "#000",
      fontSize: 14,
    },
  });

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <FlatList
          data={[{ key: 'imageSlider' }, { key: 'tweetsContainer' },]}
          renderItem={({ item }) => {
            switch (item.key) {
              case 'imageSlider':
                return (
                  <View style={styles.imageSlider}>
                    <FlatList
                      data={allSchemes}
                      renderItem={({ item }) => (
                        <TouchableOpacity
                          onPress={() => navigation.navigate('DomainDetails', { domain: item.domain })}
                        >
                          <Image source={{ uri: item.uri }} style={styles.sliderImage} />
                        </TouchableOpacity>
                      )}
                      keyExtractor={(item) => item.id.toString()}
                      horizontal={true}
                      pagingEnabled={true}
                      showsHorizontalScrollIndicator={false}
                    />
                  </View>
                );
              case 'tweetsContainer':
                return (
                  <View style={styles.tweetsContainer}>
                    <Text style={styles.tweetsHeader}> Latest Tweets</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                      {tweets.map((domain) => (
                        <View style={styles.cardContainer} key={domain.id}>
                          <View style={[styles.domainContainer, { width: 300 }]}>
                            <Text style={styles.domainHeader}>{domain.domain}</Text>
                            {domain.tweetdata.map((tweet) => (
                              <View style={styles.tweetContainer} key={tweet.id}>
                                <View>
                                <Text style={styles.tweetText}>{tweet.title}</Text>
                                <Text style={styles.tweetUser}>@{tweet.author}</Text>
                              </View>
                              
                              </View>
                            ))}
                          </View>
                        </View>
                      ))}
                    </ScrollView>
                  </View>

                );
            }
          }}

          ListHeaderComponent={() => (
            <View style={styles.section}>
              <View style={styles.title}>
                <Text style={styles.titleText}>Popular Schemes</Text>
              </View>
              <View style={styles.schemesContainer}>
                {popularSchemes.map((scheme) => (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('DomainDetails', { domain: scheme.domain })}
                    key={scheme.id} style={styles.schemeCard}>
                    <View style={styles.schemeIcon}>
                      <Icon name={scheme.icon}
                        color={theme === 'Dark' ? '#fff' : '#000'}
                        size={30} />
                    </View>
                    <View style={styles.schemeContent}>
                      <Text style={styles.schemeTitle}>{scheme.domain}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          )}
          ListFooterComponent={() => (
            <View style={styles.section}>
              <View style={styles.title}>
                <Text style={styles.titleText}>All Schemes</Text>
              </View>
              <View style={styles.schemesContainer}>
                {allSchemes.map((scheme) => (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('DomainDetails', { domain: scheme.domain })}
                    key={scheme.id} style={styles.schemeCard}>
                    <View style={styles.schemeIcon}>
                      <Icon name={scheme.icon}
                        color={theme === 'Dark' ? '#fff' : '#000'}
                        size={30} />
                    </View>
                    <View style={styles.schemeContent}>
                      <Text style={styles.schemeTitle}>{scheme.domain}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          )}
        />
      </ScrollView>
    </View>

  );
};
export default DiscoverScreen;

