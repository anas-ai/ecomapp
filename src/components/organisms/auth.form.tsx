import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { View } from 'react-native';
import { scale } from 'react-native-size-matters';
import colors from '../../styles/colors';
import { spacing } from '../../styles/spacing';
import AppButton from '../atoms/AppButton';
import AppText from '../atoms/AppText';
import InputField from '../molecules/inputField';

type Field = {
  name: string;
  label?: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onRightIconPress?: () => void;
  rules?: any;
};

type AuthFormProps = {
  title: string;
  fields: Field[];
  forgotPasswordText?: () => void;
  onSubmit: (data: any) => void;
  socialLogin?: React.ReactNode;
  AuthSwitch?: React.ReactNode;
};
const AuthForm = ({
  title,
  fields,
  onSubmit,
  socialLogin,
  AuthSwitch,
  forgotPasswordText,
}: AuthFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <View>
      <AppText variant="h1" weight="Bold">
        {title}
      </AppText>
      

      {fields.map((field, index) => (
        <Controller
          key={index}
          control={control}
          name={field.name}
          rules={field.rules}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputField
              placeholder={field.placeholder}
              secureTextEntry={field.secureTextEntry}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              leftIcon={field.leftIcon}
              rightIcon={field.rightIcon}
              onRightIconPress={field.onRightIconPress}
              error={errors[field?.name]?.message as string}
            />
          )}
        />
      ))}

      {forgotPasswordText && (
        <View style={{ alignItems: 'flex-end' }}>
          <AppButton
          onPress={forgotPasswordText}
            title="forgot password?"
            type="text"
            textStyle={{
              color: colors.primary,
              fontWeight: '600',
              fontSize: scale(12),
              paddingVertical: spacing.sm,
            }}
          />
        </View>
      )}
      <AppButton
        onPress={handleSubmit(onSubmit)}
        title="Login"
        type="primary"
        buttonStyle={{
          marginTop: spacing.xxl,
        }}
        textStyle={{
          color: colors.white,
          fontWeight: 'bold',
          fontSize: scale(16),
          paddingVertical: spacing.sm,
        }}
      />

      {socialLogin}

      {AuthSwitch}
    </View>
  );
};

export default AuthForm;
