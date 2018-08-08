// External Dependencies
import { Dimensions } from 'react-native'

const { height: height, width: width } = Dimensions.get('window')
const iPhone6ScreenHeight = 667
const iPhone6ScreenWidth = 375

export const getHeightPercentage = function getValueToScreenHeightRatio (value) {
  return (value / iPhone6ScreenHeight) * height
}

export const getWidthPercentage = function getValueToScreenWidthRatio (value) {
  return (value / iPhone6ScreenWidth) * width
}