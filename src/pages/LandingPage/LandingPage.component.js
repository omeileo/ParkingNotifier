'use strict'

// External Dependencies
import React, { Component } from 'react'
import { Image, View } from 'react-native'

import _ from 'lodash'

// Internal Components
import LandingPageCardList from './LandingPageCardList/LandingPageCardList.component'
import SearchArea from './SearchArea/SearchArea.component'
import styles from './LandingPage.styles'

import * as BackendMock from '../../__networkRequests__/__mocks__/BackendMock'

export default class LandingPage extends Component {
  render () {
    let blockedByLength, blockingLength

    if (_.isUndefined(BackendMock.interactionList)) {
      blockedByLength = 0
      blockingLength = 0
    } else {
      blockedByLength = BackendMock.interactionList.blockedBy.length
      blockingLength = BackendMock.interactionList.blocking.length
    }

    return (
      <View style={styles.container}>
        <Image style={styles.headerImage} source={require('../../assets/images/HeaderImage.png')}/>
        <LandingPageCardList allUsers={BackendMock.allUsers} interactionList={BackendMock.interactionList}/>
        <View style={styles.header}><SearchArea blockedBy={blockedByLength} blocking={blockingLength} /></View>
      </View>
    )
  }
}
