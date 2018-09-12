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
    justifyContent: 'space-between',
    height: getHeightPercentage(85),
    paddingVertical: 0,
    paddingRight: 0,
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

  mainText: {
    ...DefaultStyles.font.size.h3,
    color: colors.black
  },

  secondaryText: {
    ...DefaultStyles.font.size.h4,
    color: colors.black
  },

  contactInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: getHeightPercentage(3)
  },

  otherText: {
    ...DefaultStyles.font.size.h4,
    color: colors.blue
  },

  contactIconAndSeparator: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  contactIcon: {
    ...DefaultStyles.icon.size.small
  },

  contactIconSeparator: {
    ...DefaultStyles.font.size.h4,
    color: colors.blue,
    marginHorizontal: getWidthPercentage(7)
  },

  actionButtonArea: {
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: colors.grey.F7F7F7,
    borderBottomRightRadius: DefaultStyles.BORDER_RADIUS,
    borderTopRightRadius: DefaultStyles.BORDER_RADIUS
  },

  actionButton: {
    height: '80%',
    width: getWidthPercentage(55),
    justifyContent: 'center',
    alignItems: 'center'
  },

  actionButtonBorderLeft: {
    borderLeftColor: colors.grey.E7E8E9,
    borderLeftWidth: 2
  },

  actionIcon: {
    ...DefaultStyles.icon.size.large
  },

  actionText: {
    fontSize: 7,
    color: colors.black,
    paddingTop: 2
  },

  actionButtonSeparator: {}
})
