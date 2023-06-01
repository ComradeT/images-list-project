import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 24,
    color: '#000000',
    fontSize: 14,
    lineHeight: 20,
  },
  label: {
    marginBottom: 4,
  },
  errorContainer: {
    minHeight: 25,
  },
  error: {
    color: 'red',
    fontSize: 14,
    lineHeight: 20,
  },
});

export default styles;
