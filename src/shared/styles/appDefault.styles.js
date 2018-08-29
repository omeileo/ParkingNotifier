// External Dependencies
import { Platform } from 'react-native'

// Internal Dependencies
import colors from './colorPalette.styles'
import {getHeightPercentage, getWidthPercentage} from '../utilityFunctions'

export const card = {
  container: {
    width: '100%',
    backgroundColor: colors.white,
    paddingHorizontal: getWidthPercentage(15),
    paddingVertical: getHeightPercentage(15),
    borderRadius: 5,
  },

  shadow: {
    ...Platform.select({
      ios: {
        shadowOffset: { width: 0, height: 5 },
        shadowColor: colors.black,
        shadowOpacity: 0.5,
        shadowRadius: 7
      },

      android: {
        elevation: getHeightPercentage(6)
      }
    })
  }
}

export const icon = {
  shadow: {
    ...Platform.select({
      ios: {
        shadowOffset: { width: 0, height: 5 },
        shadowColor: colors.black,
        shadowOpacity: 0.5,
        shadowRadius: 6
      },

      android: {
        elevation: getHeightPercentage(6)
      }
    })
  },

  size: {
    large: {
      height: 23,
      width: 23
    }
  }
}

export const font = {
  size: {
    h1: { fontSize: 22 },
    h2: { fontSize: 20 },
    h3: { fontSize: 18 },
    h4: { fontSize: 14 }
  }
}
