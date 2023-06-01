import React, { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { View } from 'react-native';

import { Button, TextField } from 'components';
import AppRoutes from 'navigation/routes';
import { LoginScreenProps } from '../RootNavigator';
import { styles } from './styles';

export type AuthFormType = {
  login: string;
  password: string;
};

const LoginScreen: FC<LoginScreenProps> = ({ navigation }) => {
  const { control, handleSubmit, setError } = useForm<AuthFormType>();

  const requiredTextError = 'Поле обязательно для заполнения';
  const wrongLoginOrPasswordText = 'Неверный логин или пароль';

  const handleSignIn = async (data: AuthFormType) => {
    if (data.login !== 'login' || data.password !== 'password') {
      setError('login', { message: wrongLoginOrPasswordText });
      setError('password', { message: wrongLoginOrPasswordText });
    } else {
      navigation.navigate(AppRoutes.HomeScreen);
    }
  };

  return (
    <View style={styles.root}>
      <Controller
        control={control}
        name="login"
        rules={{ required: { value: true, message: requiredTextError } }}
        render={({ field, fieldState }) => (
          <TextField
            placeholder="Login"
            value={field.value}
            onChangeText={field.onChange}
            onBlur={field.onBlur}
            error={fieldState.error?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        rules={{ required: { value: true, message: requiredTextError } }}
        render={({ field, fieldState }) => (
          <TextField
            placeholder="Password"
            value={field.value}
            onChangeText={field.onChange}
            onBlur={field.onBlur}
            error={fieldState.error?.message}
          />
        )}
      />

      <Button onPress={handleSubmit(handleSignIn)}>Sign in</Button>
    </View>
  );
};

export default LoginScreen;
