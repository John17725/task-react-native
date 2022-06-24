import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const TaskItem = ({task}) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>Nacion: {task.Nation}</Text>
      <Text style={styles.itemDescription}>Popularidad: {task.Population}</Text>
      <Text style={styles.itemDescription}>Año: {task.Year}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    itemContainer: {
        width: 214,
        backgroundColor: '#9EAFE9',
        padding: 20,
        marginVertical: 8,
        borderRadius: 18,
    },
    itemTitle: {
        color: '#fff'
    },
    itemDescription: {
        color: '#fff'
    }
});

export default TaskItem