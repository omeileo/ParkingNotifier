// External Dependencies
import { Platform } from 'react-native'

// Internal Dependencies
import colors from './colorPalette.styles'
import {getHeightPercentage, getWidthPercentage} from '../utilityFunctions'

//Constants
export const BORDER_RADIUS = 5

// Card
export const card = {
  container: {
    width: '100%',
    backgroundColor: colors.white,
    paddingHorizontal: getWidthPercentage(15),
    paddingVertical: getHeightPercentage(15),
    borderRadius: BORDER_RADIUS,
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

// Icon
const iconResizeMode = {
  resizeMode: 'contain'
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
      ...iconResizeMode,
      height: getHeightPercentage(35),
      width: getHeightPercentage(35)
    },

    medium: {
      ...iconResizeMode,
      height: getHeightPercentage(23),
      width: getHeightPercentage(23)
    },

    small: {
      ...iconResizeMode,
      height: getHeightPercentage(13),
      width: getHeightPercentage(13)
    }
  }
}

// Font
export const font = {
  size: {
    h1: { fontSize: 22 },
    h2: { fontSize: 20 },
    h3: { fontSize: 18 },
    h4: { fontSize: 14 }
  }
}
