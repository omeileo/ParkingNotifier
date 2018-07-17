'use strict'

// External Dependencies
import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'

// Internal Components
import styles from './SearchArea.styles'

export default class SearchArea extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          <Text style={styles.mainText}>Blocking</Text>
          <Text style={styles.secondaryText}>    OR     </Text>
          <Text style={styles.mainText}>Blocked?</Text>
        </Text>

        <View style={styles.seperator}/>

        <View style={styles.search}>
          <View style={styles.searchField}></View>
          <View style={styles.searchIcon}>
            <Image style={styles.searchIconImage} source={require('../../../assets/images/Search.png')} resizeMode={'contain'}/>
          </View>
        </View>
      </View>
    )
  }
}
