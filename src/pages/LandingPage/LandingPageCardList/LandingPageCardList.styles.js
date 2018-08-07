'use strict'

// External Dependencies
import { StyleSheet } from 'react-native'

// Internal Dependencies
import colors from '../../../shared/styles/colorPalette.styles'

export default StyleSheet.create({
  container: {
    paddingTop: 110,
    paddingHorizontal: '4%'
  },

  list: {
    marginBottom: 15
  },

  listHeader: {
    fontSize: 14,
    color: colors.black,
    alignSelf: 'center',
    paddingBottom: 15
  }
})