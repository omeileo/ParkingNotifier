'use strict'

// External Dependencies
import React, { Component } from 'react'
import { Animated, View } from 'react-native'

import _ from 'lodash'

// Internal Components
import LandingPageCardList from './LandingPageCardList/LandingPageCardList.component'
import SearchArea from './SearchArea/SearchArea.component'
import styles from './LandingPage.styles'

import * as BackendMock from '../../__networkRequests__/__mocks__/BackendMock'
import { getHeightPercentage } from '../../shared/utilityFunctions'

const HEADER_MAX_HEIGHT = getHeightPercentage(350)
const HEADER_MIN_HEIGHT = getHeightPercentage(175)
const SEARCH_AREA_HEIGHT = getHeightPercentage(145)
const SEARCH_AREA_MAX_TOP = HEADER_MAX_HEIGHT - (SEARCH_AREA_HEIGHT / 2)
const SEARCH_AREA_MIN_TOP = getHeightPercentage(100)

export default class LandingPage extends Component {
  constructor () {
    super()

    this.state = {
      animatedHeaderValue: new Animated.Value(0),
      searchText: ''
    }
  }

  render () {
    let blockedByLength, blockingLength

    const animatedHeaderHeight = this.state.animatedHeaderValue.interpolate({
      inputRange: [0, (HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT)],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp'
    })

    const animatedHeaderZindex = this.state.animatedHeaderValue.interpolate({
      inputRange: [0, (HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT)],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    })

    const animatedSearchPosition = this.state.animatedHeaderValue.interpolate({
      inputRange: [0, (HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT)],
      outputRange: [SEARCH_AREA_MAX_TOP, SEARCH_AREA_MIN_TOP],
      extrapolate: 'clamp'
    })

    const onScroll = () => {
      return Animated.event([{ nativeEvent: {contentOffset: { y: this.state.animatedHeaderValue }} }])
    }

    const onChangeText = (text) => {
      this.setState({ searchText: text })
    }

    if (_.isUndefined(BackendMock.interactionList)) {
      blockedByLength = 0
      blockingLength = 0
    } else {
      blockedByLength = BackendMock.interactionList.blockedBy.length
      blockingLength = BackendMock.interactionList.blocking.length
    }

    return (
      <View style={styles.container}>
        <Animated.Image style={[styles.headerImage, {height: animatedHeaderHeight, zIndex: animatedHeaderZindex}]} source={require('../../assets/images/HeaderImage.png')} />
        <Animated.View style={[styles.searchArea, {top: animatedSearchPosition}]}>
          <SearchArea blockedBy={blockedByLength} blocking={blockingLength} onChangeText={onChangeText} searchText={this.state.searchText} />
        </Animated.View>
        <LandingPageCardList allUsers={BackendMock.allUsers} interactionList={BackendMock.interactionList} onScroll={onScroll()} />
      </View>
    )
  }
}
