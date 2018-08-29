'use strict'

// External Dependencies
import React from 'react'
import { Image, Text, TextInput, View } from 'react-native'

import PropTypes from 'prop-types'
import _ from 'lodash'

// Internal Dependencies
import colors from '../../../shared/styles/colorPalette.styles'
import styles from './SearchArea.styles'

const SearchArea = function ({blockedBy, blocking, onChangeText, onSearchAreaEntry, onSearchAreaExit, searchText}) {
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
        <View style={styles.searchField}>
          <TextInput
            onChangeText={(text) => onChangeText(text)}
            onFocus={() => onSearchAreaEntry()}
            onBlur={() => onSearchAreaExit()}
            underlineColorAndroid='transparent'
            value={searchText}
            placeholder={'Search License Plate #'}
            placeholderTextColor={colors.grey.B2E6FA}
            style={styles.inputText}
            maxLength={7}
            autoCorrect={false}
            autoCapitalize={'characters'}
            clearButtonMode={_.isEmpty(searchText) ? 'never' : 'always'}
            enablesReturnKeyAutomatically
            returnKeyType={'done'}
          />
        </View>

        <View style={styles.searchIcon}>
          <Image style={styles.searchIconImage} source={require('../../../assets/images/Search.png')} resizeMode={'contain'}/>
        </View>
      </View>
    </View>
  )
}

SearchArea.propTypes = {
  blockedBy: PropTypes.number.isRequired,
  blocking: PropTypes.number.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onSearchAreaEntry: PropTypes.func.isRequired,
  onSearchAreaExit: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired
}

export default SearchArea
