'use strict'

// External Dependencies
import { Dimensions, StyleSheet } from 'react-native'

// Internal Dependencies
import colors from '../../../shared/styles/colorPalette.styles'
import * as DefaultStyles from '../../../shared/styles/appDefault.styles'

export default StyleSheet.create({
  container: {
    ...DefaultStyles.card.container,
    ...DefaultStyles.card.shadow,
    flexDirection: 'row',
    height: 85,
    marginBottom: 15
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
    ...DefaultStyles.font.size.h3,
    color: colors.black
  },

  secondaryText: {
    ...DefaultStyles.font.size.h4,
    color: colors.black
  },

  contactInfo: {},

  otherText: {
    ...DefaultStyles.font.size.h4,
    color: colors.blue
  },

  contactIcon: {},

  actionIcon: {},

  actionButton: {},

  actionButtonSeparator: {}
})
