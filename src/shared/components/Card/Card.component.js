'use strict'

// External Dependencies
import React, { Component } from 'react'
import { Image, Linking, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'

import PropTypes from 'prop-types'
import _ from 'lodash'

// Internal Components
import colors from '../../../shared/styles/colorPalette.styles'
import styles from './Card.styles'

export default class LandingPage extends Component {
  static propTypes = {
    cardImage: PropTypes.any.isRequired,
    mainText: PropTypes.string.isRequired,
    secondaryText: PropTypes.string,
    contactInfo: PropTypes.shape({
      extension: PropTypes.string,
      mobileNumber: PropTypes.string,
      email: PropTypes.string
    }),
    cardActions: PropTypes.arrayOf(PropTypes.shape({
      icon: PropTypes.any.isRequired,
      action: PropTypes.func.isRequired
    }))
  }

  getCardDetails = function getCardDetails () {
    const { contactInfo, mainText, secondaryText } = this.props

    return (
      <View style={styles.cardDetails}>
        <Text style={styles.mainText}>{mainText}</Text>

        { !_.isEmpty(secondaryText) && <Text style={styles.secondaryText}>{secondaryText}</Text> }

        <View style={styles.contactInfo}>
          <Text style={styles.otherText}>
            { !_.isEmpty(contactInfo.extension) ? `Ext: ${contactInfo.extension}` : 'Contact:' }
          </Text>

          {
            !_.isEmpty(contactInfo.extension) && !_.isEmpty(contactInfo.mobileNumber)
            && <Text style={styles.otherText}>| </Text>
          }
          
          {
            !_.isEmpty(contactInfo.mobileNumber) &&
            <TouchableOpacity onPress={() => Linking.openURL(`tel:${contactInfo.mobileNumber}`)} activeOpacity={0.6}>
              <Image style={styles.contactIcon} source={require('../../../assets/images/Call.png')}/>
            </TouchableOpacity>
          }

          {
            (!_.isEmpty(contactInfo.extension) || !_.isEmpty(contactInfo.mobileNumber)) && !_.isEmpty(contactInfo.emailAddress)
            && <Text style={styles.otherText}>| </Text>
          }
          
          {
            !_.isEmpty(contactInfo.emailAddress) &&
            <TouchableOpacity onPress={() => Linking.openURL(`mailto:${contactInfo.emailAddress}?subject=I am blocking you&body=body`)} activeOpacity={0.6}>
              <Image style={styles.contactIcon} source={require('../../../assets/images/Chat.png')}/>
            </TouchableOpacity>
          }
        </View>
      </View>
    )
  }

  getActionArea = function getActionButtonArea () {
    const { cardActions } = this.props

    return (
      <View style={styles.actionButtonArea}>
        {_.map(cardActions,
          <TouchableHighlight style={styles.actionButton} onPress={() => cardActions.action()} activeOpacity={0.6} underlayColor={colors.grey.F7F7F7}>
            <Image style={styles.actionIcon} source={cardActions.icon}/>
          </TouchableHighlight>
        )}
      </View>
    )
  }

  render () {
    const { cardActions, cardImage } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.informationSection}>
          <Image style={styles.cardImage} source={cardImage} resizeMode={'cover'}/>
          { this.getCardDetails() }
        </View>

        { cardActions && this.getActionArea() }
      </View>
    )
  }
}
