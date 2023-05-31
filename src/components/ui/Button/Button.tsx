import React, { FC } from 'react';
import { ActivityIndicator, Text, TouchableHighlight, TouchableHighlightProps } from 'react-native';

import styles from './Button.styles';

type SimpleButtonProps = TouchableHighlightProps & {
  onPress: () => void;
  isLoading?: boolean;
  isDisabled?: boolean;
};

const SimpleButton: FC<SimpleButtonProps> = ({
  onPress,
  children,
  isDisabled = false,
  isLoading = false,
  ...props
}) => {
  return (
    <TouchableHighlight
      {...props}
      style={styles.root}
      onPress={onPress}
      disabled={isDisabled || isLoading}
      activeOpacity={0.9}
    >
      {isLoading ? (
        <ActivityIndicator color="#ffffff" />
      ) : (
        <Text style={[styles.text]} numberOfLines={1} allowFontScaling={false}>
          {children}
        </Text>
      )}
    </TouchableHighlight>
  );
};

export default SimpleButton;
