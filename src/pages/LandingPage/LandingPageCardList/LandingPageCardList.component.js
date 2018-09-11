'use strict'

// External Dependencies
import React from 'react'
import { ScrollView, Text, View } from 'react-native'

import PropTypes from 'prop-types'
import _ from 'lodash'

// Internal Components
import Card from '../../../shared/components/Card/Card.component'

import dictionary from './LandingPageCardList.dictionary'
import globalDictionary from '../../../shared/dictionaries/global.dictionary'
import images from '../../../shared/dictionaries/images.dictionary'
import styles from './LandingPageCardList.styles'

const LandingPageCardList = function ({ allUsers, interactionList, onScroll }) {
  const getInteractionList = function dynamicallyGenerateVerboseInteractionList () {
    const noInteractions = _.isEmpty(interactionList.blockedBy) && _.isEmpty(interactionList.blocking)

    if (noInteractions) {
      return (
        <View style={styles.container}>
          <Card
            cardImage={images.happyCar}
            mainText={dictionary.noInteractions.mainText}
            secondaryText={dictionary.noInteractions.secondaryText}
          />
        </View>
      )
    } else {
      return (
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false} onScroll={onScroll} scrollEventThrottle={16}>
          { getList(interactionList.blocking, globalDictionary.interactionStatus.blocking) }
          { getList(interactionList.blockedBy, globalDictionary.interactionStatus.blocked) }
        </ScrollView>
      )
    }
  }

  const getList = function (list, status) {
    if (!_.isEmpty(list)) {
      return (
        <View style={styles.list}>
          { !_.isEmpty(status) && <Text style={styles.listHeader}>{status} {list.length} Vehicle{list.length > 1 ? 's' : ''}:</Text>}

          {
            list.map((licencePlateNumber, index) => {
              const user = allUsers.find(user => user.licencePlateNumber === licencePlateNumber)
              const { color, make, model, year } = user.carDetails
              const carLogo = images.hasOwnProperty(_.lowerCase(make)) ? images[_.lowerCase(make)] : images.trafficConeDark
              let carDetails = [ color, year, make, model ]

              _.pull(carDetails, '')
              carDetails = _.join(carDetails, ' ')

              return (
                <Card
                  cardImage={carLogo}
                  mainText={user.licencePlateNumber}
                  secondaryText={carDetails}
                  contactInfo={user.contact}
                  cardActions={getCardActions(status)}
                  cardType={status}
                  key={index}
                />  
              )
            })
          }
        </View>
      )
    }
  }

  const getCardActions = function (status) {
    let cardActions = []

    switch (status) {
      case globalDictionary.interactionStatus.blocked:
        cardActions.push({ icon: images.notify, text:dictionary.iconText.notify, action: () => {} })
        break

      case globalDictionary.interactionStatus.blocking:
        cardActions.push({ icon: images.unblock, text:dictionary.iconText.unblock, action: () => {} })
        break

      case globalDictionary.interactionStatus.none:
        cardActions.push(
          { icon: images.blocking, text:dictionary.iconText.blocking, action: () => {} },
          { icon: images.blocked, text:dictionary.iconText.blocked, action: () => {} }
        )
        break
    }

    return cardActions
  }

  return getInteractionList()
}

LandingPageCardList.propTypes = {
  allUsers: PropTypes.arrayOf(
    PropTypes.shape({
      licencePlateNumber: PropTypes.string.isRequired,

      contact: PropTypes.shape({
        mobileNumber: PropTypes.string,
        extension: PropTypes.string,
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
  }),

  onScroll: PropTypes.func.isRequired
}

export default LandingPageCardList
