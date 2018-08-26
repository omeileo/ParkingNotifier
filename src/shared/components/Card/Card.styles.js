'use strict'

// External Dependencies
import { StyleSheet } from 'react-native'

// Internal Dependencies
import colors from '../../../shared/styles/colorPalette.styles'
import * as DefaultStyles from '../../../shared/styles/appDefault.styles'
import { getHeightPercentage, getWidthPercentage } from '../../../shared/utilityFunctions'

export default StyleSheet.create({
  container: {
    ...DefaultStyles.card.container,
    ...DefaultStyles.card.shadow,
    flexDirection: 'row',
    height: getHeightPercentage(85),
    marginBottom: getHeightPercentage(15)
  },

  informationSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  cardImage: {
    marginRight: getWidthPercentage(15),
    height: getHeightPercentage(35),
    width: getHeightPercentage(35),
    resizeMode: 'contain'
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