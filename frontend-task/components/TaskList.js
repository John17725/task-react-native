import { Text, FlatList } from 'react-native'
import {React} from 'react'
import TaskItem from "./TaskItem";


function TaskList({tasks}) {
    const renderItem = ({item}) => {
        return <TaskItem task={item}/>
    };
    return (
        <FlatList
            data={tasks}
            keyExtractor={(item) => item.Year}
            renderItem={ renderItem }
        />
    )
}

export default TaskList