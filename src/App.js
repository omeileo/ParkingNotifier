// External Dependencies
import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

// Internal Dependencies
import LandingPage from './pages/LandingPage/LandingPage.component'
import styles from './App.styles'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LandingPage/>
      </View>
    );
  }
}
