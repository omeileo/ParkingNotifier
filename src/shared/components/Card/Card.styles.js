'use strict'

// External Dependencies
import { Dimensions, StyleSheet } from 'react-native'

// Internal Dependencies
import colors from '../../../shared/styles/colorPalette.styles'
import { card } from '../../../shared/styles/appDefault.styles'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '93%',
    height: 85,
    alignSelf: 'center',
    marginBottom: 15,
    ...card.container,
    ...card.shadow
  },

  informationSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  cardImage: {
    marginRight: 15,
    height: 35,
    width: 35,
    resizeMode: 'cover'
  },
  
  cardDetails: {
  },

  mainText: {
    fontSize: 18,
    color: colors.black
  },

  secondaryText: {
    fontSize: 14,
    color: colors.black
  },

  contactInfo: {},

  otherText: {
    fontSize: 14,
    color: colors.blue
  },

  contactIcon: {},

  actionIcon: {},

  actionButton: {},

  actionButtonSeparator: {}
})
