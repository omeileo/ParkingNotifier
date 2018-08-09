'use strict'

// External Dependencies
import { StyleSheet } from 'react-native'

// Internal Dependencies
import { getHeightPercentage } from '../../shared/utilityFunctions'

export default StyleSheet.create({
  container: {
    flex: 1
  },

  header: {
    width: '100%',
    alignSelf: 'center',
    position: 'absolute',
    top: '41%'
  },

  headerImage: {
    width: '100%',
    resizeMode: 'cover'
  }
})
