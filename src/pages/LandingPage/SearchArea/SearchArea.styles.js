'use strict'

// External Dependencies
import { StyleSheet } from 'react-native'

// Internal Dependencies
import colors from '../../../shared/styles/colorPalette.styles'

export default StyleSheet.create({
  container: {
    width: '93%',
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 20,
    marginTop: -70,
    borderRadius: 5,
    
    // Android Shadow
    elevation: 10,

    // iOS Shadow
    shadowOffset: { width: 0, height: 5 },
    shadowColor: colors.black,
    shadowOpacity: 0.5,
    shadowRadius: 15
  },

  title: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingBottom: 10
  },

  mainText: {
    fontSize: 24,
    fontWeight: '500'
  },

  secondaryText: {
    fontSize: 14,
    fontStyle: 'italic',
    fontWeight: '500'
  },

  seperator: {
    height: 2,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 1,
    backgroundColor: colors.grey.E7E8E9
  },

  search: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20
  },

  searchField: {
    height: 50,
    width: '80%',
    borderRadius: 25,
    backgroundColor: colors.blue,

    // Android Shadow
    elevation: 10,

    // iOS Shadow
    shadowOffset: { width: 0, height: 5 },
    shadowColor: colors.black,
    shadowOpacity: 0.5,
    shadowRadius: 6
  },

  placeholderText: {},

  searchText: {},

  searchIcon: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: colors.blue,

    // Android Shadow
    elevation: 10,

    // iOS Shadow
    shadowOffset: { width: 0, height: 5 },
    shadowColor: colors.black,
    shadowOpacity: 0.5,
    shadowRadius: 6
  },

  searchIconImage: {
    flex: 1,
    height: 23,
    width: 23,
    alignSelf: 'center',
  }
})
