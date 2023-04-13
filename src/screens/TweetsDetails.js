import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { tweets } from './data'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';


const TweetsDetails = (route) => {

    const { domain } = route.route.params;
    const tweet = tweets.find((tweet) => tweet.domain === domain);

    const theme = useSelector(state => state.theme) || 'Dark';
    const styles = StyleSheet.create({
        tweetsContainer: {
            flex: 1,
            backgroundColor: theme === 'Dark' ? '#121212' : '#fff',
            padding: 20,
        },
        header: {
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            paddingVertical: 10,
            color: theme === 'Dark' ? '#fff' : '#000',
            borderBottomColor: theme === 'Dark' ? '#333' : '#ccc',
            borderBottomWidth: 1,
        },
        tweets: {
            flex: 1,
        },
        tweetContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 10,
            borderBottomColor: theme === 'Dark' ? '#333' : '#ccc',
            borderBottomWidth: 1,
        },
        tweetContent: {
            flex: 1,
        },
        tweetText: {
            fontSize: 16,
            color: theme === 'Dark' ? '#fff' : '#000',
        },
        tweetUser: {
            fontSize: 14,
            color: theme === 'Dark' ? '#fff' : '#000',
        },
    });


    return (
        <View style={styles.tweetsContainer}>
            <Text style={styles.header}>Latest Tweets</Text>
            <View style={styles.tweets}>
                <FlatList
                    data={tweet.tweetdata}
                    renderItem={({ item }) => (
                        <View style={styles.tweetContainer}>
                            <View style={styles.tweetContent}>
                                <Text style={styles.tweetText}>{item.title}</Text>
                                <Text style={styles.tweetUser}>@{item.author}</Text>
                            </View>
                            <Icon name="twitter" size={26} color="#1DA1F2" />
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                />

            </View>
        </View>
    )
}


export default TweetsDetails

