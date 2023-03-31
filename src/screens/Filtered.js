import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';


const FilteredScreen = ({ route }) => {
  const { filteredSchemes } = route.params;
    const navigation = useNavigation();
    const theme = useSelector(state => state.theme) || 'Dark' ;
    const styles = StyleSheet.create({
      container: {
        backgroundColor: theme==='Dark'? '#121212' : '#fff', 
        flex: 1,
        padding: 10,
        },
        card: {
            backgroundColor: theme==='Dark'?'#1e1e1e' : '#f0f0f0',
            flexDirection: 'row',
            padding: 10,
            borderRadius: 10,
            marginBottom: 10,
        },
        imageContainer: {
            width: 100,
            height: 100,
            borderRadius: 10,
            overflow: 'hidden',
        },
        image: {
            width: 100,
            height: 100,
            resizeMode: 'cover',
        },
        content: {
            flex: 1,
            marginLeft: 10,
        },
        title: {
            color: theme==='Dark'? '#ffffff' : '#000000',
            fontSize: 18,
            fontWeight: 'bold',
        },
        count: {
            color: theme==='Dark'?'#ffffff' : '#000000',
            fontSize: 14,
            fontWeight: 'bold',
            marginTop: 5,
        },
        description: {
            color: theme==='Dark'? '#ffffff' : '#000000',
            fontSize: 14,
            marginTop: 5,
        },
        noResultText: {
            color:theme==='Dark'? '#ffffff' : '#000000',
            fontSize: 18,
            fontWeight: 'bold',
            alignSelf: 'center',
            marginTop: 20,
        },
    });
  
  return (
    <View style={styles.container}>
    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:10, paddingVertical: 10, marginBottom: 10}}>
            <Text style={{color:theme==='Dark'? '#ffffff' : '#000000',fontSize:20,fontWeight:'bold'}}>Filtered Schemes</Text>
            <View style={{flexDirection:'row',alignItems:'center', justifyContent: 'flex-end', width:100}}>
            <Text style={{color:theme==='Dark'? '#ddd' : '#000000',fontSize:15, marginHorizontal:5  }}>Total :</Text>
            <Text style={{color:theme==='Dark'? '#ddd' : '#000000',fontSize:20,fontWeight:'bold'}}>{filteredSchemes.length}</Text>
            </View>
        </View>
      {filteredSchemes.length > 0 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingTop: 10, paddingBottom: 20 }}
        >
          {filteredSchemes.map
            (scheme => (
                <TouchableOpacity
                    key={scheme.id}
                    onPress={() => navigation.navigate('SchemeDetails', { scheme })}
                >
                    <View style={styles.card}>
                        <View style={styles.imageContainer}>
                            <Image source={{ uri: scheme.uri }} style={styles.image} />
                        </View>
                        <View style={styles.content}>
                            <Text style={styles.title}>{scheme.title}</Text>
                            <Text style={styles.count}>{scheme.count}</Text>
                            <Text style={styles.description} numberOfLines={3}>
                                {scheme.description}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
          ))}
        </ScrollView>
      ) : (
        <Text style={styles.noResultText}>No results found</Text>
      )}
    </View>
  );
};



export default FilteredScreen;

