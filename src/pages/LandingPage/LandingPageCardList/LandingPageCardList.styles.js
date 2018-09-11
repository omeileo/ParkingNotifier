'use strict'

// External Dependencies
import { StyleSheet } from 'react-native'

// Internal Dependencies
import colors from '../../../shared/styles/colorPalette.styles'

import { font } from '../../../shared/styles/appDefault.styles'
import { getHeightPercentage, getWidthPercentage } from '../../../shared/utilityFunctions'

export default StyleSheet.create({
  container: {
    paddingTop: getHeightPercentage(460),
    paddingHorizontal: getWidthPercentage(15)
  },

  list: {
    marginBottom: getHeightPercentage(15)
  },

  listHeader: {
    ...font.size.h3,
    color: colors.black,
    alignSelf: 'center',
    paddingBottom: getHeightPercentage(15)
  }
})