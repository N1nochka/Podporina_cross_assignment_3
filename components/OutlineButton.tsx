import React from 'react';
import { TouchableOpacity, Text, StyleSheet, useWindowDimensions, Platform } from 'react-native';
import { COLORS, SIZES, TYPOGRAPHY } from '../constants';

export const OutlineButton = ({ title, onPress, disabled = false }) => {
  const { width } = useWindowDimensions();
  const buttonWidth = Math.min(width * 0.85, 320);

  return (
    <TouchableOpacity
      style={[styles.button, { width: buttonWidth }, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <Text style={[styles.text, disabled && styles.textDisabled]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: SIZES.outlineButtonHeight,
    backgroundColor: COLORS.white,
    borderColor: COLORS.primaryDark,
    borderWidth: 2,
    borderRadius: SIZES.borderRadius,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    alignSelf: 'center',
    // Тінь для iOS
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    // Тінь для Android
    elevation: 4,
  },
  disabled: { 
    borderColor: COLORS.textLight,
    shadowOpacity: 0,
    elevation: 0,
  },
  text: { color: COLORS.primaryDark, fontSize: TYPOGRAPHY.body, fontWeight: '600' },
  textDisabled: { color: COLORS.textLight },
});