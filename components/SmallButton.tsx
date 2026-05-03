import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface SmallButtonProps {
  title: string;
  onPress: () => void;
}

const SmallButton: React.FC<SmallButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: '#D32F2F',
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#212121',
  },
});

export default SmallButton;