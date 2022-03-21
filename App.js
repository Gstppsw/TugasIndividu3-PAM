import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HalamanKedua from './Component/HalamanKedua';
import HalamanPertama from './Component/HalamanPertama';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"Satu"}
        screenOptions={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#00A9CC',
          },
        }}
      >
        <Stack.Screen
          name="Satu"
          component={HalamanPertama}
          options={{
            title: "",
            headerLeft: () => <FontAwesome name="bars" size={24} color="white" style={{marginLeft:20}}/>,
            headerRight: () => <FontAwesome name="user-alt" size={24} color="white" style={{marginRight:20}}/>,
          }}
        />
        <Stack.Screen
          name="Dua"
          component={HalamanKedua}
          options={{
            title: "TerbangGak.Com",
            headerRight: () => <FontAwesome name="user-alt" size={24} color="white" style={{marginRight:20}}/>,
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;



