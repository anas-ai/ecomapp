import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Template from '../../components/templates/Template';
import AuthForm from '../../components/organisms/auth.form';
import * as Icon from 'phosphor-react-native';

const ForgotPassword = () => {
  const handleSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <Template>
      <AuthForm
        title={'Forgot\npassword?'}
        fields={[
          {
            name: 'ForgotPasswordEmail',
            placeholder: 'Enter your email address',
            leftIcon: <Icon.EnvelopeIcon size={28} />,
            rules: {
              required: 'Email is required',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Invalid email',
              },
            },
          },
        ]}
        BtnTitle='Submit'
        onSubmit={handleSubmit}
        HelperText='We will send you an email to reset your password'
      />
    </Template>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({});
