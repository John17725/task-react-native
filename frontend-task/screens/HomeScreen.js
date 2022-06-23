import { View, Text, FlatList } from 'react-native'
import { React, useEffect, useState} from 'react';
import { getTasks } from "../api";
import TaskList from "../components/TaskList";
import Layout from "../components/Layout";

const HomeScreen = (props) => {
    const [tasks, setTasks] = useState([])
    const loadTasks = async () => {
        const data = await getTasks();
        console.log(data);
        setTasks(data);
    }
    useEffect(() =>{
        loadTasks();
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