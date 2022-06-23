import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"
import {Text, TouchableOpacity } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import TaskFormScreen from "./screens/TaskFormScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Create Task" component={TaskFormScreen} 
          options={{
            title: 'Create Task',
            headerStyle: {backgroundColor: "#222f3e"},
            headerTitleStyle: {color: '#fff'},
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen name="Todo Tasks" component={HomeScreen} 
        options={({navigation}) => ({
          headerStyle: {backgroundColor: '#58B081'},
          headerTitleStyle: {color: '#fff'},
          headerRight: () => {
            return <TouchableOpacity onPress={() => navigation.navigate("Create Task")}><Text style={{color: '#fff',marginRight: 18, fontSize: 18}}>New</Text></TouchableOpacity>
          },
          })}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;