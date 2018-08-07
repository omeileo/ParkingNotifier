'use strict'

// External Dependencies
import React, { Component } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'

import PropTypes from 'prop-types'
import _ from 'lodash'

// Internal Components
import Card from '../../../shared/components/Card/Card.component'
import dictionary from './LandingPageCardList.dictionary'
import styles from './LandingPageCardList.styles'

const LandingPageCardList = function ({ allUsers, interactionList }) {
  const getInteractionList = function dynamicallyGenerateVerboseInteractionList () {
    const noInteractions = _.isEmpty(interactionList) || _.isUndefined(interactionList)

    if (noInteractions) {
      return (
        <View style={styles.container}>
          <Card
            cardImage={require('../../../assets/images/TrafficConeDark.png')}
            mainText={dictionary.noInteractions.mainText}
            secondaryText={dictionary.noInteractions.secondaryText}
          />
        </View>
      )
    } else {
      return (
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
          { getList(interactionList.blocking, `You're Blocking`) }
          { getList(interactionList.blockedBy, `You're Blocked By`) }
        </ScrollView>
      )
    }
  }

  const getList = function (list, beforeText) {
    if (!_.isEmpty(list)) {
      return (
        <View style={styles.list}>
          <Text style={styles.listHeader}>{beforeText} {list.length} Vehicle{list.length > 1 ? 's' : ''}:</Text>
          {
            list.map((licencePlateNumber, index) => {
              return (
                <Card
                  cardImage={require('../../../assets/images/TrafficConeDark.png')}
                  mainText={licencePlateNumber}
                  key={index}
                />  
              )
            })
          }
        </View>
      )
    }
  }

  return getInteractionList()
}

LandingPageCardList.propTypes = {
  allUsers: PropTypes.arrayOf(
    PropTypes.shape({
      licencePlateNumber: PropTypes.string.isRequired,

      contact: PropTypes.shape({
        mobileNumber: PropTypes.string,
        extension: PropTypes.number,
        emailAddress: PropTypes.string
      }).isRequired,

      name: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired
      }),

      carDetails: PropTypes.shape({
        color: PropTypes.string,
        make: PropTypes.string,
        model: PropTypes.string,
        year: PropTypes.string,
      })
    })
  ).isRequired,

  interactionList: PropTypes.shape({
    blockedBy: PropTypes.arrayOf(
      PropTypes.string.isRequired,
    ).isRequired,

    blocking: PropTypes.arrayOf(
      PropTypes.string.isRequired,
    ).isRequired
  })
}

export default LandingPageCardList
