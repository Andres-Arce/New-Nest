import { StyleSheet } from 'react-native';

export const styles_feature = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    marginVertical: 10,
    overflow: 'hidden',
    elevation: 2, // Android shadow
  },

  image: {
    width: '100%',
    height: 180,
  },

  contentContainer: {
    padding: 14,
    gap: 6,
  },
  
  temperatureCard: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#F9FAFB',
  borderRadius: 14,
  padding: 16,
  marginVertical: 12,
  elevation: 2,
},

weatherImage: {
  width: 60,
  height: 60,
  marginRight: 14,
},

temperatureInfo: {
  flex: 1,
}
});