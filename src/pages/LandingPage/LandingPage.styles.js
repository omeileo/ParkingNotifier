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
    top: '34%'
  },

  headerImage: {
    width: '100%',
    height: getHeightPercentage(299),
    resizeMode: 'cover'
  }
})
