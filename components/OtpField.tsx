import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { Input } from '@rneui/themed';

type Props = {};

const OtpField = (props: Props) => {
  return (
    <Input
      containerStyle={styles.container}
      inputStyle={{ textAlign: 'center' }}
      inputContainerStyle={{ borderColor: 'transparent' }}
    />
  );
};

export default OtpField;

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 6,
    borderColor: 'black',
    borderWidth: 2,
    textAlign: 'center',
  },
});
