import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants';

interface PlasmaIconProps {
  size?: number;
  color?: string;
  showText?: boolean;
}

const PlasmaIcon: React.FC<PlasmaIconProps> = ({ 
  size = 80, 
  color = COLORS.primary, 
  showText = false 
}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.iconCircle, { width: size, height: size, borderRadius: size / 2 }]}>
        <Text style={[styles.iconText, { fontSize: size * 0.4 }]}>🩸</Text>
      </View>
      {showText && <Text style={styles.label}>PlasmaDonate</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  iconCircle: {
    backgroundColor: '#FFEBEE',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,           // ← додано
    borderColor: COLORS.primary, // ← додано (COLORS.primary = #D32F2F)
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  iconText: {
    color: COLORS.primary,
  },
  label: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginTop: 8,
  },
});

export default PlasmaIcon;