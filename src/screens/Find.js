import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';



import { allSchemes } from './data';
import { useSelector } from 'react-redux';

const FilterScreen = () => {
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');
  const [income, setIncome] = useState('');
  const navigation = useNavigation();

  const theme = useSelector(state => state.theme) || 'Dark' ;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme==='Dark' ? '#121212' : '#fff',
      paddingHorizontal: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
      width: '95%',
      height: '50%',
      backgroundColor: theme==='Dark' ?'#1E1E1E' : '#F0F0F0',
      borderRadius: 25,
      padding: 20,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 10,
      elevation: 10,
      marginBottom: 20,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 30,
      color: theme==='Dark' ?'#FFFFFF' : '#000000',
      marginTop: 20,
    },
    pickerContainer: {
      backgroundColor: theme==='Dark' ?'#2E2E2E' : '#E0E0E0',
      borderRadius: 10,
      width: '100%',
      marginBottom: 20,
      paddingHorizontal: 15,
    },
    picker: {
      height: 50,
      color:theme==='Dark' ? '#FFFFFF' : '#000000',
    },
    pickerItem: {
      fontSize: 18,
      fontWeight: '500',
    },
    button: {
      backgroundColor:theme==='Dark' ? '#EEE' : '#000',
      paddingHorizontal: 30,
      paddingVertical: 10,
      borderRadius: 30,
      alignItems: 'center',
      marginTop: 10,
    },
    buttonText: {
      color: theme==='Dark' ? '#000' : '#fff',
      fontSize: 20,
      fontWeight: 'bold',
    },
  });

  const handleFilter = () => {
    const filteredSchemes = allSchemes.flatMap(domain => 
      domain.schemes.filter(scheme => {
        const category = scheme.category || {};
        return (
          (!gender || category.gender === gender) &&
          (!age || category.age === age) &&
          (!location || category.location === location) &&
          (!income || category.income === income)
        );
      })
    );
    
    console.log(filteredSchemes);
    navigation.navigate('Filtered', { filteredSchemes });
  };
  return (
    <View style={styles.container}>
    <View style={styles.card}>
      <Text style={styles.title}>Find Policies</Text>
      <ScrollView>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={gender}
          onValueChange={setGender}
          style={styles.picker}
          itemStyle={styles.pickerItem}
        >
          <Picker.Item label="Gender" value="" />
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Female" value="Female" />
        </Picker>
      </View>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={age}
          onValueChange={setAge}
          style={styles.picker}
          itemStyle={styles.pickerItem}
        >
          <Picker.Item label="Age" value="" />
          {Array.from({ length: 100 }, (_, i) => i + 1).map((age) => (
            <Picker.Item key={age} label={age.toString()} value={age.toString()} />
          ))}
        </Picker>
      </View>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={location}
          onValueChange={setLocation}
          style={styles.picker}
          itemStyle={styles.pickerItem}
        >
          <Picker.Item label="State" value="" />
          <Picker.Item label="Maharashtra" value="Maharashtra" />
          <Picker.Item label="Gujarat" value="Gujarat" />
          <Picker.Item label="Karnataka" value="Karnataka" />
        </Picker>
      </View>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={income}
          onValueChange={setIncome}
          style={styles.picker}
          itemStyle={styles.pickerItem}
        >
          <Picker.Item label="Annual Income" value="" />
          <Picker.Item label="0-100000" value="0-100000" />
          <Picker.Item label="100000-200000" value="100000-200000" />
          <Picker.Item label="200000-300000" value="200000-300000" />
          <Picker.Item label="300000-400000" value="300000-400000" />
          <Picker.Item label="400000-500000" value="400000-500000" />
        </Picker>
      </View>
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={handleFilter}>
        <Text style={styles.buttonText}>Apply Filters</Text>
      </TouchableOpacity>
      
    </View>
  </View>
  );
};



export default FilterScreen;
