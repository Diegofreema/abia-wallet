import { Dimensions, StyleSheet, View } from 'react-native';
import React from 'react';
import { generateStyles } from '@/constants/styles';
import { Link, Stack } from 'expo-router';
import { ButtonGroup, Input, Text } from '@rneui/themed';
import { Button } from '@rneui/base';
import OtpField from '@/components/OtpField';

type Props = {};
const { width } = Dimensions.get('window');
const otpFields = new Array(6).fill('');
const Verify = (props: Props) => {
  return (
    <View style={generateStyles.container}>
      <Stack.Screen
        options={{
          title: '',
          headerShadowVisible: false,
          headerShown: true,
        }}
      />
      <View style={{ flex: 1 }}>
        <Text h4 style={{ marginBottom: 5 }}>
          Verify Your Email
        </Text>
        <Text>
          Please enter the OTP sent to your email address you provided to verify
          your email address.
        </Text>
        <View style={styles.otp}>
          {otpFields.map((_, i) => (
            <OtpField key={i} />
          ))}
        </View>
      </View>
      <View style={{ gap: 10 }}>
        <Link href={'/finish'} asChild>
          <Button
            title={'Verify Account'}
            radius={'md'}
            buttonStyle={{ height: 50 }}
          />
        </Link>
        <Link href={'/'} asChild>
          <Button
            title={'Resend Code'}
            type="outline"
            radius={'md'}
            buttonStyle={{ height: 50 }}
          />
        </Link>
      </View>
    </View>
  );
};

export default Verify;

const styles = StyleSheet.create({
  otp: {
    marginTop: 10,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
