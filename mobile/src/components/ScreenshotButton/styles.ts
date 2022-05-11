import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: theme.colors.surface_secondary,
    height: 40,
    justifyContent: 'center',
    marginRight: 8,
    position: 'relative',
    width: 40
  },
  removeIcon: {
    bottom: 0,
    position: 'absolute',
    right: 0
  },
  image: {
    height: 40,
    width: 40
  }
})