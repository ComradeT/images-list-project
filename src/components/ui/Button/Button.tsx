import React, { FC } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import styles from './Button.styles';

const Button: FC<TouchableOpacityProps> = ({ children, ...props }) => {
  return (
    <TouchableOpacity {...props} style={styles.root} activeOpacity={0.6}>
      <Text style={[styles.text]} numberOfLines={1} allowFontScaling={false}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
