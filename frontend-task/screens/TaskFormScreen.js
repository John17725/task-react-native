import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Layout from "../components/Layout";
import { TextInput } from 'react-native-gesture-handler';

function TaskFormScreen() {
  return (
    <Layout>
        <TextInput
            style={styles.input}
            placeholder='Write title Task'
            placeholderTextColor="#000"
        >
        </TextInput>
        <TextInput
            style={styles.input}
            placeholder='Write description Task'
            placeholderTextColor="#000"
        >
        </TextInput>

        <TouchableOpacity style={styles.buttonSave}>
            <Text style={styles.text}>Guardar</Text>
        </TouchableOpacity>
    </Layout>
  )
}

const styles = StyleSheet.create({
    input:{
        width: '90%',
        height: 36,
        backgroundColor: '#fff',
        fontSize: 18,
        margin: 8,
        borderRadius: 14,
        color: '#000',
        padding: 6,
        textAlign: 'center',
    },
    buttonSave:{
        width: 88,
        paddingTop: 14,
        paddingBottom: 14,
        borderRadius: 16,
        marginBottom: 12,
        backgroundColor: '#fff',
    },
    text: {
        textAlign: 'center',
    }
});

export default TaskFormScreen