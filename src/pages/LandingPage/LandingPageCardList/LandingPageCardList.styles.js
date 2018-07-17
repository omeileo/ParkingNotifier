'use strict'

// External Dependencies
import { StyleSheet } from 'react-native'

// Internal Dependencies
import colors from '../../../shared/styles/colorPalette.styles'

export default StyleSheet.create({
  container: {
    marginTop: 120
  },

  list: {
    marginBottom: 25
  },

  listHeader: {
    fontSize: 14,
    color: colors.black,
    alignSelf: 'center',
    paddingBottom: 15
  }
})