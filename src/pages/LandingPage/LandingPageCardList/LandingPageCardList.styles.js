'use strict'

// External Dependencies
import { StyleSheet } from 'react-native'

// Internal Dependencies
import colors from '../../../shared/styles/colorPalette.styles'
import { font } from '../../../shared/styles/appDefault.styles'

export default StyleSheet.create({
  container: {
    paddingTop: 110,
    paddingHorizontal: '4%'
  },

  list: {
    marginBottom: 15
  },

  listHeader: {
    ...font.size.h4,
    color: colors.black,
    alignSelf: 'center',
    paddingBottom: 15
  }
})