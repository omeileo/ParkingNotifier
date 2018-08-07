'use strict'

// External Dependencies
import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'

import PropTypes from 'prop-types'
import _ from 'lodash'

// Internal Components
import styles from './SearchArea.styles'

const SearchArea = function ({blockedBy, blocking}) {
  const getTitle = function getSearchAreaTitle () {
    const isBlockedBy = _.isFinite(blockedBy) && blockedBy !== 0
    const isBlocking = _.isFinite(blocking) && blocking !== 0
    
    if (!isBlockedBy && !isBlocking) {
      return (
        <View style={styles.title}>
          <Text style={styles.mainText}>Blocking</Text>
          <View style={styles.orText}><Text style={styles.secondaryText}>OR</Text></View>
          <Text style={styles.mainText}>Blocked?</Text>
        </View>
      )
    } else {
      return (
        <View style={styles.title}>
          { isBlocking && <Text style={styles.mainText}>Blocking: {blocking}</Text> }
          { isBlockedBy && isBlocking && <View style={styles.verticalSeparator}></View> }
          { isBlockedBy && <Text style={styles.mainText}>Blocked By: {blockedBy}</Text> }
        </View>
      )
    }
  }

  return (
    <View style={styles.container}>
      {getTitle()}

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

SearchArea.propTypes = {
  blockedBy: PropTypes.number.isRequired,
  blocking: PropTypes.number.isRequired
}

export default SearchArea
