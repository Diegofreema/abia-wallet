import { StyleSheet, View } from 'react-native';
import { Icon } from '@rneui/themed';

import { Link, Stack } from 'expo-router';
import { Text } from '@rneui/themed';
import { Button } from '@rneui/themed';
import { generateStyles } from '@/constants/styles';

export default function WelcomeScreen() {
  return (
    <View style={generateStyles.container}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Icon name="adjust" size={40} />
        <Text h3>Abia Wallet</Text>
      </View>
      <View style={{ marginBottom: 40, width: '100%', gap: 10 }}>
        <Link href={'/signUp'} asChild>
          <Button
            title={'Create Account'}
            radius={'md'}
            buttonStyle={{ height: 50 }}
          />
        </Link>
        <Link href={'/signIn'} asChild>
          <Button
            title={'Sign in'}
            type="outline"
            radius={'md'}
            buttonStyle={{ height: 50 }}
          />
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});
