import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, FlatList, Image, RefreshControl, TouchableOpacity, ScrollView, Linking } from 'react-native';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToSavedNews,
  removeSavedNews,
  updateNewsItem,
} from '../redux/action/action';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback'
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};
const NewsScreen = () => {
  const [newsData, setNewsData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();
  const newsItems = useSelector((state) => state.newsItems);
  const savedNewsItems = useSelector((state) => state.savedNews.savedNews);
  
  const theme = useSelector(state => state.theme) || 'Dark' ;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme === 'Dark' ? '#121212' : '#fff',
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
    newsItem: {
      flexDirection: 'row',
      marginVertical: 10,
      marginHorizontal: 20,
      borderRadius: 10,
      backgroundColor: theme === 'Dark' ? '#212121' : '#f0f0f0',
      overflow: 'hidden',
    },
    newsImage: {
      width: 100,
      height: 100,
      borderBottomRightRadius: 10,
    },
    newsInfo: {
      flex: 1,
      padding: 10,
      color: theme === 'Dark' ? '#fff' : '#000',
    },
    newsTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme === 'Dark' ? '#fff' : '#000',
    },
    newsDescription: {
      fontSize: 14,
      marginTop: 5,
      color: theme === 'Dark' ? '#fff' : '#000',

    },
    newsSource: {
      fontSize: 12,
      fontStyle: 'italic',
      marginTop: 5,
      color: theme === 'Dark' ? '#fff' : '#000',
    },
    saveButton: {
      position: 'absolute',
      bottom: 5,
      right: 5,
      width: 30,
      height: 30,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
    },
    savedButton: {
      position: 'absolute',
      bottom: 5,
      right: 5,
      width: 30,
      height: 30,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
    },
    noSavedNews: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    noSavedNewsText: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      color: theme === 'Dark' ? '#fff' : '#000',
    },
  });
  const loadData = async () => {
    setRefreshing(true);
    try{
      const response = await fetch(
        'https://newsapi.org/v2/everything?q=(Indian Farmers) OR (Agriculture Policy) OR (Government Schemes)&apiKey=61791c34ac4f49fc8520fba06544afcd'
      );
      const data = await response.json(); 
      const updatedData = data.articles.map((item) => {
        const savedItem = savedNewsItems.find((savedNewsItem) => savedNewsItem.url === item.url);
        if (savedItem) {
          return { ...item, isSaved: true };
        }
        return { ...item, isSaved: false }
      });
      setNewsData(updatedData);
    } catch (error) {
      console.log(error);
    }
    setRefreshing(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    setNewsData((prevState) => {
      return prevState.map((newsItem) => {
        const savedItem = savedNewsItems.find((savedNewsItem) => savedNewsItem.url === newsItem.url);
        if (savedItem) {
          return { ...newsItem, isSaved: true };
        }
        return { ...newsItem, isSaved: false }
      });
    });
  }, [savedNewsItems]);

  const handleSavePress = (item) => {
    dispatch(addToSavedNews(item));
    ReactNativeHapticFeedback.trigger('impactLight', options);
    setNewsData((prevState) => {
      return prevState.map((newsItem) => {
        if (newsItem === item) {
          return { ...newsItem, isSaved: true };
        }
        return newsItem;
      });
    });
  };

  const handleRemoveSavedItem = useCallback((item) => {
    dispatch(removeSavedNews(item));
    ReactNativeHapticFeedback.trigger('impactLight', options);
    dispatch(updateNewsItem({ url: item.url, isSaved: false }));
    setNewsData((prevState) => {
      return prevState.map((newsItem) => {
        if (newsItem.url === item.url) {
          return { ...newsItem, isSaved: false };
        }
        return newsItem;
      });
    });
  }, []);

  const renderNewsItem = ({ item }) => {
    const savedItem = newsItems && newsItems.find((newsItem) => newsItem.url === item.url && newsItem.isSaved);
    console.log(item.title, savedItem);
    return (

      <View style={styles.container}>
        <TouchableOpacity
          style={styles.newsItem}
          onPress={() => Linking.openURL(item.url)}
        >
        <Image style={styles.newsImage} source={{ uri: item.urlToImage }} />
          <View style={styles.newsInfo}>
              <Text style={styles.newsTitle}>{item.title}</Text>
              <Text style={styles.newsDescription}>{item.description}</Text>
              <Text style={styles.newsSource}>
                {item.source.name} - {moment(item.publishedAt).fromNow()}
              </Text>
          </View>
          {item.isSaved ? (
              <TouchableOpacity
                style={styles.savedButton}
                onPress={() => handleRemoveSavedItem(item)}
              >
                <Icon name="bookmark" 
                size={18} 
                color= { theme === 'Dark' ? '#fff' : '#000' }
                solid />
              </TouchableOpacity>
          ) : (
              <TouchableOpacity
                style={styles.saveButton}
                onPress={() => handleSavePress(item)}
              >
                <Icon name="bookmark" 
                size={18} 
                color= { theme === 'Dark' ? '#fff' : '#000' }

                />
              </TouchableOpacity>
          )}
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Latest Updates</Text>
        <FlatList
          data={newsData}
          renderItem={renderNewsItem}
          keyExtractor={(item) => item.url}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={loadData} />
          }
        />
    </View>
  );
};

export default NewsScreen;
