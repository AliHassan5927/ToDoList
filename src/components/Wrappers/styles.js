import { StyleSheet } from 'react-native';
import { width } from '@services/dimensions';
import { Colors } from '@constants';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.background1,
    paddingHorizontal: width(5),

  },
  compContainer: {
    marginHorizontal: width(5),
  },
  rowCompContainer: {
    alignItems: 'center',
    marginHorizontal: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
