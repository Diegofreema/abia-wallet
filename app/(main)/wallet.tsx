import { StyleSheet, View } from 'react-native';
import React from 'react';
import { generateStyles } from '@/constants/styles';
import { Stack, Tabs } from 'expo-router';
import { Icon } from '@rneui/base';
import { Text } from '@rneui/themed';

type Props = {};

const Wallet = (props: Props) => {
  return (
    <View style={generateStyles.container}>
      <Tabs.Screen
        options={{
          title: '',
          headerLeft: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon
                name="adjust"
                color={'skyblue'}
                style={{ marginHorizontal: 10 }}
                size={40}
              />
              <Text h4 style={{ color: 'skyblue' }}>
                Abia<Text style={{ color: 'green' }}>Market</Text>Place
              </Text>
            </View>
          ),
          tabBarIcon: ({ focused, color }) => (
            <Icon name="account-balance-wallet" color={color} />
          ),
          tabBarLabel: ({ focused, color }) => (
            <Text style={{ color: color }}>Wallet</Text>
          ),
        }}
      />
      <Text>Wallet</Text>
    </View>
  );
};

export default Wallet;

const styles = StyleSheet.create({});
