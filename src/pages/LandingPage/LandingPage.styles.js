'use strict'

// External Dependencies
import { StyleSheet } from 'react-native'

// Internal Dependencies
import colors from '../../shared/styles/colorPalette.styles'
import * as DefaultStyles from '../../shared/styles/appDefault.styles'
import { getWidthPercentage } from '../../shared/utilityFunctions'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey.F5F5F5
  },
  
  headerImage: {
    width: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0
  },

  searchArea: {
    position: 'absolute',
    alignSelf: 'center',
    marginHorizontal: getWidthPercentage(15),
    left: 0,
    right: 0,
    zIndex: 2
  }
})
