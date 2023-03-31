import React, { useCallback } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { removeSavedNews, removeSavedSchemes, updateNewsItem, updateSchemesItem } from '../redux/action/action';
import Icon from 'react-native-vector-icons/FontAwesome';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import { useState } from 'react';
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const SaveScreen = () => {
  const theme = useSelector(state => state.theme) || 'Dark';

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

    tabs: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginVertical: 10,
    },
    tabButton: {
      padding: 10,
      borderRadius: 10,
      marginHorizontal: 5,
      backgroundColor: theme === 'Dark' ? '#121212' : '#f0f0f0',
    },
    activeTabButton: {
      backgroundColor: theme === 'Dark' ? '#333' : '#ddd',
    },
    tabButtonText: {
      fontSize: 16,
      color: theme === 'Dark' ? '#fff' : '#000',
    },
    activeTabButtonText: {
      color: theme === 'Dark' ? '#fff' : '#000',
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
    removeButton: {
      padding: 5,
      borderRadius: 5,
      alignSelf: 'flex-end',
    },
    removeButtonText: {
      color: theme === 'Dark' ? '#ffffff' : '#000000',
      fontWeight: 'bold',
    },
    noSavedText: {
      textAlign: 'center',
      marginTop: 50,
      fontSize: 16,
      color: theme === 'Dark' ? '#666' : '#000',
    },
  });
  const savedNews = useSelector(state => state.savedNews.savedNews);
  const savedSchemes = useSelector(state => state.savedSchemes.savedSchemes);

  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState('news');

  const handleRemovePress = (item) => {
    dispatch(removeSavedNews(item));
    ReactNativeHapticFeedback.trigger('impactLight', options);
    dispatch(updateNewsItem({ url: item.url, isSaved: false }));
  };

  const handleRemoveSchemesPress = (item) => {
    dispatch(removeSavedSchemes(item));
    ReactNativeHapticFeedback.trigger('impactLight', options);
    dispatch(updateSchemesItem({ id: item.id, isSaved: false }));
  };



  const renderSchemesItem = useCallback((scheme) => {
    console.log(scheme);
    return (
      <View style={styles.newsItem}>
        <Image style={styles.newsImage} source={{ uri: scheme.uri }} onError={() => console.log('Image load error')} />
        <View style={styles.newsInfo}>
          <Text style={styles.newsTitle}>{scheme.title}</Text>
          <Text style={styles.newsDescription}>{scheme.description}</Text>
          <TouchableOpacity style={styles.removeButton} onPress={() => handleRemoveSchemesPress(scheme)}>
            <Icon name="trash"
              size={20}
              color={theme === 'Dark' ? '#fff' : '#000'} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }, [handleRemoveSchemesPress, theme]);
  



  const renderNewsItem = useCallback(({ item }) => {
    return (
      <View style={styles.newsItem}>
        <Image style={styles.newsImage} source={{ uri: item.urlToImage }} />
        <View style={styles.newsInfo}>
          <Text style={styles.newsTitle}>{item.title}</Text>
          <Text style={styles.newsDescription}>{item.description}</Text>
          <Text style={styles.newsSource}>
            {item.source && item.source.name} - {moment(item.publishedAt).fromNow()}
          </Text>
          <TouchableOpacity style={styles.removeButton} onPress={() => handleRemovePress(item)}>
            <Icon name="trash"
              size={20}
              color={theme === 'Dark' ? '#fff' : '#000'} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }, [handleRemovePress]);

  console.log(savedNews);
  console.log(savedSchemes);
  

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Saved News</Text>
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'news' && styles.activeTabButton]}
          onPress={() => setActiveTab('news')}>
          <Text style={[styles.tabButtonText, activeTab === 'news' && styles.activeTabButtonText]}>
            News
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'schemes' && styles.activeTabButton]}
          onPress={() => setActiveTab('schemes')}>
          <Text style={[styles.tabButtonText, activeTab === 'schemes' && styles.activeTabButtonText]}>
            Schemes
          </Text>
        </TouchableOpacity>
      </View>
      {activeTab === 'news' && (
        <FlatList
          data={savedNews}
          renderItem={renderNewsItem}
          keyExtractor={item => item.url}
          ListEmptyComponent={<Text style={styles.noSavedText}>No saved news</Text>}
        />
      )}
      {activeTab === 'schemes' && savedSchemes && savedSchemes.length > 0 && (
        <FlatList
          data={savedSchemes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => renderSchemesItem(item)}
        />
      )}

    </View>
  );
};

export default SaveScreen;

