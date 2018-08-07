'use strict'

// External Dependencies
import { StyleSheet } from 'react-native'

// Internal Dependencies
import colors from '../../../shared/styles/colorPalette.styles'
import { card , icon} from '../../../shared/styles/appDefault.styles'

export default StyleSheet.create({
  container: {
    ...card.container,
    ...card.shadow,
    paddingBottom: 20,
    width: '92%',
    alignSelf: 'center'
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
    ...icon.shadow,
    height: 50,
    width: '80%',
    borderRadius: 25,
    backgroundColor: colors.blue
  },

  placeholderText: {},

  searchText: {},

  searchIcon: {
    ...icon.shadow,
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: colors.blue
  },

  searchIconImage: {
    ...icon.size.large,
    flex: 1,
    alignSelf: 'center',
  }
})
