'use strict'

// External Dependencies
import { Dimensions, StyleSheet } from 'react-native'

const { height: viewportHeight } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1
  },

  header: {
    width: '100%',
    alignSelf: 'center',
    position: 'absolute',
    top: 340
  },

  headerImage: {
    width: '100%',
    height: (62 / 100) * viewportHeight,
    resizeMode: 'cover'
  }
})
