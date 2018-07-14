'use strict'

import { Dimensions, StyleSheet } from 'react-native'

const { height: viewportHeight } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    alignItems: 'center'
  },

  header: {
    alignItems: 'center',
    height: (62 / 100) * viewportHeight
  },

  headerImage: {
    height: '100%'
  }
})
