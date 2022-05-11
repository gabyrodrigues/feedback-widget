import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 24
  },
  header: {
    flexDirection: 'row',
    marginVertical: 16
  },
  titleContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingRight: 24
  },
  titleText: {
    color: theme.colors.text_primary,
    fontFamily: theme.fonts.medium,
    fontSize: 20
  },
  image: {
    height: 24,
    marginRight: 8,
    width: 24
  },
  input: {
    borderColor: theme.colors.stroke,
    borderRadius: 8,
    borderWidth: 1,
    color: theme.colors.text_primary,
    fontFamily: theme.fonts.regular,
    height: 112,
    marginBottom: 8,
    padding: 12
  },
  footer: {
    flexDirection: 'row',
    marginBottom: 16
  }
})