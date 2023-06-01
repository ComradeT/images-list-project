import React, { ForwardedRef, forwardRef } from 'react';
import { Text, TextInput, TextInputProps, View } from 'react-native';

import styles from './TextField.styles';

type TextFieldProps = TextInputProps & {
  error?: string;
};

const TextField = forwardRef(
  ({ error, style, value, onChangeText, ...props }: TextFieldProps, ref: ForwardedRef<TextInput>) => {
    return (
      <View style={style}>
        <TextInput
          {...props}
          value={value}
          onChangeText={onChangeText}
          autoCapitalize="none"
          allowFontScaling={false}
          autoCorrect={false}
          spellCheck={false}
          placeholderTextColor="grey"
          style={styles.root}
          ref={ref}
        />

        <View style={styles.errorContainer}>{error && <Text style={styles.error}>{error}</Text>}</View>
      </View>
    );
  },
);

export default TextField;
