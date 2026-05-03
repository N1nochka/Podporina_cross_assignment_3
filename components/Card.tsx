import React from 'react';
import { View, StyleSheet, Platform, useWindowDimensions } from 'react-native';
import { COLORS, SIZES } from '../constants';

export const Card = ({ children }) => {
  const { width } = useWindowDimensions();
  const cardWidth = width - 32;

  return <View style={[styles.card, { width: cardWidth }]}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    padding: SIZES.paddingMedium,
    backgroundColor: COLORS.cardBackground,
    borderColor: COLORS.border,
    borderWidth: 1,
    borderRadius: SIZES.borderRadius,
    marginBottom: 12,
    alignSelf: 'center',
    shadowColor: COLORS.shadow,
    shadowOpacity: 0.1,
    shadowRadius: SIZES.shadowBlur,
    shadowOffset: { width: 0, height: Platform.OS === 'ios' ? 2 : 4 },
    elevation: 3,
  },
});