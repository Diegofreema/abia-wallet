import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import { Link, Stack, useNavigation } from 'expo-router';
import { Button, Input, Text } from '@rneui/themed';
import TextInput from '@/components/Input';
import { generateStyles } from '@/constants/styles';

type Props = {};
const validityText = [
  '5 characters or above',
  'number',
  'Social characters',
  'Uppercase characters',
  'Lowercase characters',
];
const Validity = () => {
  return validityText.map((text) => (
    <View
      key={text}
      style={{
        padding: 5,
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'dashed',
        borderRadius: 5,
      }}
    >
      <Text>{text}</Text>
    </View>
  ));
};

const SignUp = (props: Props) => {
  const navigation = useNavigation();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={generateStyles.container}
    >
      <Stack.Screen
        options={{ title: '', headerShadowVisible: false, headerShown: true }}
      />
      <Text h4>Get Started</Text>
      <View style={{ marginVertical: 30, paddingBottom: 30 }}>
        <TextInput label="First Name" placeholder="Enter first name" />
        <TextInput
          label="Middle Name (Optional)"
          placeholder="Enter middle name"
        />
        <TextInput label="Last Name" placeholder="Enter Last name" />
        <TextInput
          label="Email Address"
          type="email-address"
          placeholder="Enter email address"
        />
        <TextInput label="Phone Number" placeholder="" />
        <TextInput
          label="Password"
          secureTextEntry
          placeholder="Enter password"
        />
        <TextInput
          label="Confirm password"
          placeholder="Enter confirm password"
          secureTextEntry
        />
        <View style={styles.validity}>
          <Validity />
        </View>
        <TextInput label="Referral Code" placeholder="Enter referral  code" />
        <Link href={'/verify'} asChild>
          <Button title="Continue" radius={'md'} buttonStyle={{ height: 50 }} />
        </Link>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  validity: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
    marginLeft: 8,
    marginBottom: 10,
  },
});
