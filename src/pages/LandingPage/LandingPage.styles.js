'use strict'

// External Dependencies
import { StyleSheet } from 'react-native'

// Internal Dependencies
import { getWidthPercentage } from '../../shared/utilityFunctions'

export default StyleSheet.create({
  container: {
    flex: 1
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
    position: 'absolute',
    marginHorizontal: getWidthPercentage(15),
    left: 0,
    right: 0
  }
})
