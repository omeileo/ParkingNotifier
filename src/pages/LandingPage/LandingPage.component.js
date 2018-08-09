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

export default class LandingPage extends Component {
  constructor () {
    super()
    this.AnimatedHeaderValue = new Animated.Value(0)
  }

  render () {
    let blockedByLength, blockingLength
    let headerMaximumHeight = (350)
    let headerMinimumHeight = (175)

    const AnimatedHeaderHeight = this.AnimatedHeaderValue.interpolate({
      inputRange: [0, (headerMaximumHeight - headerMinimumHeight)],
      outputRange: [headerMaximumHeight, headerMinimumHeight],
      extrapolate: 'clamp'
    })

    const onScroll = () => {
      return Animated.event([{ nativeEvent: {contentOffset: { y: this.AnimatedHeaderValue }} }])
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
        <Animated.Image style={[styles.headerImage, {height: AnimatedHeaderHeight}]} source={require('../../assets/images/HeaderImage.png')} />
        <LandingPageCardList allUsers={BackendMock.allUsers} interactionList={BackendMock.interactionList} onScroll={onScroll()} />
        <View style={[styles.header]}><SearchArea blockedBy={blockedByLength} blocking={blockingLength} /></View>
      </View>
    )
  }
}
