import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'

const Layout = ({children}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#222f3e"/>
      { children }
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3B75B3',
        padding: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Layout