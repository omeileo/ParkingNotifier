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

export default class LandingPageCardList extends Component {
  static propTypes = {
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

  getInteractionList = function dynamicallyGenerateVerboseInteractionList () {
    const { interactionList: { blockedBy, blocking } } = this.props
    const noInteractions = _.isEmpty(blockedBy) && _.isEmpty(blocking)

    if (noInteractions) {
      return (
        <Card
          cardImage={require('../../../assets/images/TrafficConeDark.png')}
          mainText={dictionary.noInteractions.mainText}
          secondaryText={dictionary.noInteractions.secondaryText}
        />
      )
    } else {
      return (
        <View>
          <View style={styles.list}>
            {!_.isEmpty(blocking) && <Text style={styles.listHeader}>You're Blocking {blocking.length} Vehicles:</Text>}
            {!_.isEmpty(blocking) &&
              blocking.map((licencePlateNumber, index) => {
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

          <View style={styles.list}>
            {!_.isEmpty(blockedBy) && <Text style={styles.listHeader}>You're Blocked By {blockedBy.length} Vehicles:</Text>}
            {!_.isEmpty(blockedBy) &&
              blockedBy.map((licencePlateNumber, index) => {
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
        </View>
      )
    }
  }

  render () {
    const { allUsers, interactionList: { blockedBy, blocking } } = this.props

    return (
      <ScrollView contentContainerStyle={styles.container}>
        { this.getInteractionList() }
      </ScrollView>
    )
  }
}
