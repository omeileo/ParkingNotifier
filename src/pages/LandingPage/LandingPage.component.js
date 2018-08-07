'use strict'

// External Dependencies
import React, { Component } from 'react'
import { Image, View } from 'react-native'

// Internal Components
import LandingPageCardList from './LandingPageCardList/LandingPageCardList.component'
import SearchArea from './SearchArea/SearchArea.component'
import styles from './LandingPage.styles'

import * as BackendMock from '../../__networkRequests__/__mocks__/BackendMock'

export default class LandingPage extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Image style={styles.headerImage} source={require('../../assets/images/HeaderImage.png')}/>
        <LandingPageCardList allUsers={BackendMock.allUsers} interactionList={BackendMock.interactionList}/>
        <View style={styles.header}><SearchArea/></View>
      </View>
    )
  }
}
