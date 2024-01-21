
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, TextInput, StyleSheet } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CommonButton from './CommonButton';
import TextInputBox from './TextInputBox';

const LocationModal = ({ isVisible, onClose, location }) => {
  const [locationDetails, setLocationDetails] = useState({
    title: '',
    locationPlaceText: '',
    latitude: location?.latitude == null ? 10.6677032 : location?.latitude,
    longitude: location?.longitude == null ? 75.988872 : location?.longitude,
    time: new Date().toLocaleTimeString(),
  });
  const [savedLocations, setSavedLocations] = useState([]);

  const fetchLocationPlaceText = async () => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${location?.latitude == null ? 10.6677032 : location?.latitude}&lon=${location?.longitude == null ? 75.988872 : location?.longitude}&zoom=18&addressdetails=1`
      );

      setLocationDetails((prevDetails) => ({
        ...prevDetails,
        locationPlaceText: response.data.display_name,
      }));
    } catch (error) {
      console.error('Error fetching location place text:', error);
    }
  };

  useEffect(() => {
    console.log(location, 'location?')


    fetchLocationPlaceText();
  }, [location]);
  const handleSave = async () => {

    console.log('Saved Location:', locationDetails);
    try {

      const currentLocations = await AsyncStorage.getItem('savedLocations');
      const savedLocations = currentLocations ? JSON.parse(currentLocations) : [];


      savedLocations.push(locationDetails);

      await AsyncStorage.setItem('savedLocations', JSON.stringify(savedLocations));
      onClose();
    } catch (error) {
      console.error(error);
    }

  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.card}>
        <Text style={styles.title}>Save Location</Text>
        <Text style={styles.label}>Title:</Text>
        <TextInput
          placeholder="Enter title"
          onChangeText={(text) =>
            setLocationDetails((prevDetails) => ({ ...prevDetails, title: text }))
          }
          style={styles.input}
        />

        <Text style={styles.label}>Location Place Text:</Text>
        <Text style={styles.value}>{locationDetails.locationPlaceText}</Text>


        <Text style={styles.label}>Latitude:</Text>
        <Text style={styles.value}>{locationDetails.latitude}</Text>

        <Text style={styles.label}>Longitude:</Text>
        <Text style={styles.value}>{locationDetails.longitude}</Text>

        <Text style={styles.label}>Time:</Text>
        <Text style={styles.value}>{locationDetails.time}</Text>


        <View style={{ height: 50, flexDirection: 'row', justifyContent: 'space-between', width: 300 }}>
          <CommonButton
            onPress={handleSave}
            color={'blue'}
            title={'Save'}
          />
          <CommonButton
            onPress={onClose}
            color={'red'}
            title={'cancel'}
          />
        </View>


      </View>
    </Modal>
  );
};

export default LocationModal;
const styles = StyleSheet.create({
  card: { backgroundColor: 'white', padding: 20, borderRadius: 10, marginTop: 50, alignItems: 'center', shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 4, elevation: 5, },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, },
  label: { fontSize: 18, marginBottom: 5, },
  input: { borderWidth: 1, borderColor: 'gray', borderRadius: 5, padding: 10, marginBottom: 20, width: '80%', },
  value: { fontSize: 16, marginBottom: 20, }, button: { backgroundColor: 'skyblue', padding: 10, borderRadius: 5, width: '60%', alignItems: 'center', },
  buttonText: { color: 'white', fontSize: 18, fontWeight: 'bold', },
});