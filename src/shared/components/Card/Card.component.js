'use strict'

// External Dependencies
import React, { Component } from 'react'
import { Alert, Image, Linking, Text, TouchableOpacity, View } from 'react-native'

import PropTypes from 'prop-types'
import _ from 'lodash'

// Internal Components
import globalDictionary from '../../dictionaries/global.dictionary'
import images from '../../dictionaries/images.dictionary';
import styles from './Card.styles'

export default class Card extends Component {
  static propTypes = {
    cardType: PropTypes.string.isRequired,
    cardImage: PropTypes.any.isRequired,
    mainText: PropTypes.string.isRequired,
    secondaryText: PropTypes.string,
    contactInfo: PropTypes.shape({
      extension: PropTypes.string,
      mobileNumber: PropTypes.string,
      email: PropTypes.string
    }),
    cardActions: PropTypes.arrayOf(PropTypes.shape({
      action: PropTypes.func.isRequired,
      icon: PropTypes.any.isRequired,
      text: PropTypes.text
    }))
  }

  getCardDetails = function () {
    const { cardType, contactInfo: { mobileNumber, extension, emailAddress }, mainText, secondaryText } = this.props
    const contactObjects = []
    let subject = ''
    let body = ''

    switch (cardType) {
      case globalDictionary.interactionStatus.blocked:
        subject = `Urgent: Please unblock ${mainText} ASAP.`
        body = `The ${_.isEmpty(secondaryText) ? 'person' : secondaryText} (${mainText}) you are blocking would like to leave now.\n\nSent from The Parking Lot Notifier`
        break

      case globalDictionary.interactionStatus.blocking:
        subject = `Update: ${mainText} is no longer blocking you.`
        body = `Just wanted you to know that you are no longer being blocked by the ${secondaryText}.\n\nSent from The Parking Lot Notifier`
        break

      case globalDictionary.interactionStatus.none:
        subject = ``
        body = ``
        break
    }

    if (!_.isEmpty(extension)) contactObjects.push({ data: `Ext: ${extension}`, onPress: () => Alert.alert('Extension', `Dial this extension from your office phone.`), isText: true })
    else contactObjects.push({ data: 'Contact:  ', onPress: () => {}, isText: true })

    if (!_.isEmpty(mobileNumber)) contactObjects.push({ data: images.call, onPress: () => Linking.openURL(`tel:${mobileNumber}`) })
    if (!_.isEmpty(mobileNumber)) contactObjects.push({ data: images.chat, onPress: () => Linking.openURL(`sms:${mobileNumber}&body=${body}`) })
    if (!_.isEmpty(emailAddress)) contactObjects.push({ data: images.email, onPress: () => Linking.openURL(`mailto:${emailAddress}?subject=${subject}&body=${body}`) })

    return (
      <View>
        <Text style={styles.mainText}>{mainText}</Text>

        { !_.isEmpty(secondaryText) && <Text style={styles.secondaryText}>{secondaryText}</Text> }

        <View style={styles.contactInfo}>
          {
            contactObjects.map((contact, index) => {
              return (
                <View style={styles.contactIconAndSeparator} key={index}>
                  <TouchableOpacity onPress={contact.onPress} activeOpacity={globalDictionary.ACTIVE_OPACITY} hitSlop={{top: 10, bottom: 10, left: 5, right: 5}}>
                    {
                      contact.isText
                        ? <Text style={styles.otherText}>{ contact.data }</Text>
                        : <Image style={styles.contactIcon} source={contact.data}/>
                    }
                  </TouchableOpacity>

                  { ((index + 1) < contactObjects.length ) && contact.data !== 'Contact:  ' && <Text style={styles.contactIconSeparator}>|</Text>}
                </View>
              )
            })
          }
        </View>
      </View>
    )
  }

  getActionArea = function getActionButtonArea () {
    const { cardActions } = this.props

    return (
      <View style={styles.actionButtonArea}>
        {
          cardActions.map((cardAction, index) => {
            const showButtonSeparator = cardActions.length === 2 && index === 1

            return (
              <TouchableOpacity style={[styles.actionButton, showButtonSeparator && styles.actionButtonBorderLeft]} onPress={() => cardAction.action()} activeOpacity={globalDictionary.ACTIVE_OPACITY} key={index}>
                <Image style={styles.actionIcon} source={cardAction.icon}/>
                <Text style={styles.actionText}>{ _.toUpper(cardAction.text)}</Text>
              </TouchableOpacity>
            )
          })
        }
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

        { !_.isUndefined(cardActions) && this.getActionArea() }
      </View>
    )
  }
}
