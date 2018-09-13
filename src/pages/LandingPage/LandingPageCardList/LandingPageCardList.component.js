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

const LandingPageCardList = function ({ allUsers, interactionList, onScroll, searchText }) {
  const noInteractions = _.isEmpty(interactionList.blockedBy) && _.isEmpty(interactionList.blocking)

  const getList = function (list, status) {
    const isFilteredList = status === globalDictionary.interactionStatus.none

    if (!_.isEmpty(list)) {
      return (
        <View style={!isFilteredList && styles.list}>
          { !isFilteredList && <Text style={styles.listHeader}>{status} {list.length} Vehicle{list.length > 1 ? 's' : ''}:</Text>}

          {
            list.map((user, index) => {
              const { color, make, model } = user.carDetails
              const carLogo = images.hasOwnProperty(_.lowerCase(make)) ? images[_.lowerCase(make)] : images.trafficConeDark
              let carDetails = [ color, make, model ]

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
    } else if (isFilteredList) return (
      <Text style={styles.listHeader}>Licence Plate # Not Found</Text>
    )
  }

  const getInteractionList = function dynamicallyGenerateVerboseInteractionList (list) {
    let interactionListUsers = []

    list.map((licencePlateNumber) => {
      interactionListUsers.push(allUsers.find(user => user.licencePlateNumber === licencePlateNumber))
    })

    return interactionListUsers
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

  const getReturnList = function () {
    if (!_.isEmpty(searchText)) {
      const filteredUsers = allUsers.filter(user => { return user.licencePlateNumber.indexOf(searchText) > -1 })
  
      return (
        getList(filteredUsers, globalDictionary.interactionStatus.none)
      )
    } else if (noInteractions) {
      return (
        <Card
          cardImage={images.happyCar}
          mainText={dictionary.noInteractions.mainText}
          secondaryText={dictionary.noInteractions.secondaryText}
          cardType={globalDictionary.interactionStatus.none}
        />
      )
    } else {
      return (
        <View>
          { getList(getInteractionList(interactionList.blocking), globalDictionary.interactionStatus.blocking) }
          { getList(getInteractionList(interactionList.blockedBy), globalDictionary.interactionStatus.blocked) }
        </View>
      )
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false} onScroll={onScroll} scrollEventThrottle={16}>
      { getReturnList() }
    </ScrollView>
  )
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

  onScroll: PropTypes.func.isRequired,

  searchText: PropTypes.string
}

export default LandingPageCardList
