import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: theme.colors.surface_secondary,
    borderRadius: 8,
    height: 112,
    justifyContent: 'center',
    marginHorizontal: 8,
    padding: 8,
    width: 104
  },
  image: {
    height: 40,
    width: 40
  },
  title: {
    color: theme.colors.text_primary,
    fontFamily: theme.fonts.medium,
    fontSize: 14,
    marginTop: 8
  }
})