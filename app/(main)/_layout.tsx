import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';

type Props = {};
export const unstable_settings = {
  initialRouteName: 'dashboard',
};
const _layout = (props: Props) => {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: '#fff' },
        headerTintColor: 'black',
        tabBarStyle: { backgroundColor: '#fff', marginTop: -20 },
      }}
    />
  );
};

export default _layout;
