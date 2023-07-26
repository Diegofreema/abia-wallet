import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Input, Text } from '@rneui/themed';

type Props = {
  label?: string;
  placeholder: string;
  type?: 'email-address';
  secureTextEntry?: boolean;
};

const TextInput = ({ label, placeholder, type, secureTextEntry }: Props) => {
  return (
    <Input
      secureTextEntry={secureTextEntry}
      keyboardType={type}
      label={label}
      placeholder={placeholder}
      inputContainerStyle={{
        borderColor: 'black',
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 6,
        marginTop: 10,
      }}
      labelStyle={{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
      }}
    />
  );
};

export default TextInput;

const styles = StyleSheet.create({});
