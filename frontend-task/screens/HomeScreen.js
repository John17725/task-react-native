import { View, Text, FlatList } from 'react-native'
import { React, useEffect, useState} from 'react';
import { getTasks } from "../api";
import TaskList from "../components/TaskList";
import Layout from "../components/Layout";
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = (props) => {
    const [input, setInput] = useState('');
    const [tasks, setTasks] = useState([])
    const loadTasks = async () => {
        const data = await getTasks();
        // console.log(data.data);
        setTasks(data.data);
    }
    const storeData = async (value) => {
        try {
          await AsyncStorage.setItem('tarea', value)
          console.log('Sucess saving data storage');
        } catch (e) {
            console.log('Error saving data storage',e);
        }
      }
      const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('tarea')
          if(value != null) {
            console.log('value previously stored', value)
          }else{
            console.log('value is null');
          }
        } catch(e) {
          console.log('error reading value');
        }
      }
    useEffect(() =>{
        loadTasks();
        console.log('init');
        getData();
        console.log('end');
    },[]);
  return (
    <Layout>
        <TaskList
            tasks={tasks}
        />
    </Layout>
  )
}

export default HomeScreen