import { StyleSheet, View } from 'react-native';
import React from 'react';
import { generateStyles } from '@/constants/styles';
import { Stack } from 'expo-router';
import { Link } from 'expo-router';
import { Button, Text } from '@rneui/themed';

type Props = {};

const Almost = (props: Props) => {
  return (
    <View style={[generateStyles.container, { backgroundColor: '#4B9CD3' }]}>
      <Stack.Screen
        options={{
          headerShown: true,
          headerRight: () => (
            <Link href={'/lastStep'} style={{ color: '#fff', fontSize: 20 }}>
              Skip
            </Link>
          ),
          headerStyle: { backgroundColor: '#4B9CD3' },
          headerTintColor: 'white',
        }}
      />
      <Text h3 style={{ color: 'white' }}>
        Almost there! Verify your identity so we are sure it is you
      </Text>
      <View style={{ marginTop: 25, flex: 1 }}>
        <Text style={{ color: 'white', marginBottom: 10 }}>
          We are required by law to verify identity before you can start making
          transaction with your Abia Wallet
        </Text>
        <Text style={{ color: 'white', marginBottom: 6 }}>
          The next step will require you to upload a copy of a government issued
          ID, Examples include:
        </Text>
        <Text style={{ color: 'white' }}>- International Passport</Text>
        <Text style={{ color: 'white' }}>- National ID</Text>
        <Text style={{ color: 'white' }}>- Drivers License</Text>
      </View>
      <View style={{ backgroundColor: 'white', borderRadius: 7 }}>
        <Link href={'/lastStep'} asChild>
          <Button
            title="Next"
            radius={'md'}
            buttonStyle={{ height: 50 }}
            style={{ backgroundColor: 'white' }}
            type="clear"
          />
        </Link>
      </View>
    </View>
  );
};

export default Almost;

const styles = StyleSheet.create({});
