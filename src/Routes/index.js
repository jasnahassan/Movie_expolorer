import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';



import MovieListScreen from '../Screens/MovieListScreen';
import MovieDetailScreen from '../Screens/MovieDetailScreen';

const Stack = createStackNavigator();
if (!__DEV__) {
  console.log = () => null;
}
const index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MovieListScreen" component={MovieListScreen} />  
      <Stack.Screen name="MovieDetailScreen" component={MovieDetailScreen} />  
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default index;
