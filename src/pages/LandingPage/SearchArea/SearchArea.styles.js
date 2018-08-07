'use strict'

// External Dependencies
import { StyleSheet } from 'react-native'

// Internal Dependencies
import colors from '../../../shared/styles/colorPalette.styles'
import * as DefaultStyles from '../../../shared/styles/appDefault.styles'

export default StyleSheet.create({
  container: {
    ...DefaultStyles.card.container,
    ...DefaultStyles.card.shadow,
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
    ...DefaultStyles.font.size.h1,
    fontWeight: '500'
  },

  secondaryText: {
    ...DefaultStyles.font.size.h4,
    fontStyle: 'italic',
    fontWeight: '500'
  },

  orText: {
    marginHorizontal: '2.6%',
    justifyContent: 'center'
  },

  verticalSeparator: {
    width: 1.2,
    height: '95%',
    marginHorizontal: '4.7%',
    backgroundColor: colors.black
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
    ...DefaultStyles.icon.shadow,
    height: 50,
    width: '80%',
    borderRadius: 25,
    backgroundColor: colors.blue
  },

  placeholderText: {},

  searchText: {},

  searchIcon: {
    ...DefaultStyles.icon.shadow,
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: colors.blue
  },

  searchIconImage: {
    ...DefaultStyles.icon.size.large,
    flex: 1,
    alignSelf: 'center',
  }
})
