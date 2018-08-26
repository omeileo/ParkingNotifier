// Internal Dependencies
import colors from './colorPalette.styles'

export const card = {
  container: {
    width: '100%',
    backgroundColor: colors.white,
    padding: 15,
    borderRadius: 5,
  },

  shadow: {
    // Android Shadow
    elevation: 10,

    // iOS Shadow
    shadowOffset: { width: 0, height: 5 },
    shadowColor: colors.black,
    shadowOpacity: 0.5,
    shadowRadius: 15
  }
}

export const icon = {
  shadow: {
    // Android Shadow
    elevation: 10,

    // iOS Shadow
    shadowOffset: { width: 0, height: 5 },
    shadowColor: colors.black,
    shadowOpacity: 0.5,
    shadowRadius: 6
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