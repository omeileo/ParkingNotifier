'use strict'

// External Dependencies
import { Dimensions, StyleSheet } from 'react-native'

const { height: viewportHeight } = Dimensions.get('window')

export default StyleSheet.create({
  container: {},

  header: {
    alignItems: 'center',
    height: (62 / 100) * viewportHeight
  },

  headerImage: {
    height: '100%',
    resizeMode: 'cover'
  }
})
