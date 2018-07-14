'use strict'

// External Dependencies
import React, { Component } from 'react'
import { Image, View } from 'react-native'

// Internal Components
import SearchArea from './SearchArea/SearchArea.component'
import styles from './LandingPage.styles'

export default class LandingPage extends Component {
  render () {
    return (
      <View style={styles.containter}>
        <View style={styles.header}>
          <Image style={styles.headerImage} source={require('../../assets/images/HeaderImage.png')} resizeMode={'cover'}/>
          <SearchArea/>
        </View>

        <View></View>
      </View>
    )
  }
}
