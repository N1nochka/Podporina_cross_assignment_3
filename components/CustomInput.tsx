import React from 'react';
import { View, TextInput, StyleSheet, useWindowDimensions } from 'react-native';
import { COLORS, SIZES } from '../constants';

export const CustomInput = ({ placeholder, value, onChangeText, secureTextEntry = false }) => {
  const { width } = useWindowDimensions();
  const inputWidth = Math.min(width * 0.85, 320);

  return (
    <View style={[styles.container, { width: inputWidth }]}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={COLORS.textSecondary}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginBottom: 12, alignSelf: 'center' },
  input: {
    height: SIZES.inputHeight,
    backgroundColor: COLORS.white,
    borderColor: COLORS.border,
    borderWidth: 1,
    borderRadius: SIZES.borderRadius,
    paddingHorizontal: SIZES.paddingMedium,
    color: COLORS.textPrimary,
    fontSize: 14,
  },
});