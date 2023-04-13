import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';

const Splash = () => {
    const theme = useSelector(state => state.theme) || 'Dark';

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
        text: {
            fontSize: 18,
            textAlign: 'center',
            fontFamily: 'MontserratAlt1-ExtraLight',
            color: theme === 'Dark' ? '#fff' : '#000',
        },
    })
    
    return (
        <View style={styles.container}>
            <View style={styles.HeadingContainer}>
                <Text style={styles.title}>Welcome to</Text>
                <Text style={styles.title}>Insights</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Backed by Inside Labs </Text>
            </View>
        </View>

    )
    }

export default Splash

