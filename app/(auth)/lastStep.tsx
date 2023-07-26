import { StyleSheet, View } from 'react-native';
import React from 'react';
import { generateStyles } from '@/constants/styles';
import { Button, Icon, Text } from '@rneui/themed';
import { Link, Stack } from 'expo-router';

type Props = {};

const Last = (props: Props) => {
  return (
    <View style={generateStyles.container}>
      <Stack.Screen
        options={{
          headerLeft: () => '',
          headerRight: () => (
            <Link href={'/'}>
              <Icon name="close" />
            </Link>
          ),
          headerShown: true,
        }}
      />
      <View style={{ alignItems: 'center', marginBottom: 50 }}>
        <Text h4>Lets Verify Your Identity</Text>
        <Text>To get verified you will need to</Text>
      </View>
      <View style={{ flex: 1 }}>
        <View style={styles.row}>
          <View
            style={{
              borderWidth: 1,
              borderColor: 'skyblue',
              justifyContent: 'center',
              width: 70,
              height: 70,
              borderRadius: 50,
            }}
          >
            <Icon name="save" color={'skyblue'} size={30} />
          </View>
          <Text style={{ fontSize: 18, flex: 1 }}>
            Upload photos of documents proving your identity
          </Text>
        </View>
        <View style={styles.row}>
          <View
            style={{
              borderWidth: 1,
              borderColor: 'skyblue',
              justifyContent: 'center',
              width: 70,
              height: 70,
              borderRadius: 50,
            }}
          >
            <Icon name="camera-front" color={'skyblue'} size={30} />
          </View>
          <Text style={{ fontSize: 18 }}>Record a short selfie video</Text>
        </View>
      </View>
      <Link href={'/dashboard'} asChild>
        <Button title="Start" radius={'md'} buttonStyle={{ height: 50 }} />
      </Link>
    </View>
  );
};

export default Last;

const styles = StyleSheet.create({
  row: {
    marginBottom: 20,
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
});
