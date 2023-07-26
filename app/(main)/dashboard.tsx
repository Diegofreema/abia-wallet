import { StyleSheet, View, Dimensions } from 'react-native';
import React from 'react';
import { generateStyles } from '@/constants/styles';
import { Tabs } from 'expo-router';
import { Icon, Text } from '@rneui/themed';

type Props = {};
const { width } = Dimensions.get('window');
const title = ['Tax Payment', 'Levies Payment', 'Collections Payment'];

const DashBoard = (props: Props) => {
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
                Abia<Text style={{ color: 'green' }}>Market</Text>Place{' '}
              </Text>
            </View>
          ),
          tabBarIcon: ({ focused, color }) => (
            <Icon name="dashboard" color={color} />
          ),
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color }}>Dashboard</Text>
          ),
        }}
      />
      <Text style={{ marginBottom: 20 }} h4>
        My Wallet
      </Text>
      <View style={styles.container}>
        <Text style={{ marginBottom: 10, fontSize: 18, fontWeight: '600' }}>
          Available Balance
        </Text>
        <Text style={{ fontSize: 20, fontWeight: '700' }}>₦478,000.00</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <View style={styles.semiContainer}>
            <Text>Fund Wallet</Text>
            <Icon name="add" />
          </View>
          <View style={styles.semiContainer}>
            <Text>Make Payment</Text>
            <Icon name="add" />
          </View>
        </View>
      </View>
      <View>
        <Text h4 style={{ marginBottom: 10, marginTop: 30 }}>
          My Revenue Payments
        </Text>
        <View
          style={{ flexDirection: 'row', gap: 10, justifyContent: 'center' }}
        >
          {title.map((item) => (
            <View key={item}>
              <View
                style={{
                  width: width / 3 - 15,
                  height: 100,
                  borderColor: 'black',
                  borderWidth: 2,
                  borderRadius: 6,
                  marginBottom: 10,
                }}
              />
              <Text style={{ fontSize: 15, fontWeight: '600' }}>{item}</Text>
            </View>
          ))}
        </View>
        <View>
          <Text h4 style={{ marginTop: 20, marginBottom: 10 }}>
            My Business
          </Text>
          <View
            style={{
              width: width / 3 - 15,
              height: 100,
              borderColor: 'black',
              borderWidth: 2,
              borderRadius: 6,
              marginBottom: 8,
            }}
          />
          <Text style={{ fontSize: 15, fontWeight: '600' }}>Tax Payment</Text>
        </View>
      </View>
    </View>
  );
};

export default DashBoard;

const styles = StyleSheet.create({
  semiContainer: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'center',
    backgroundColor: 'lightgray',
    paddingHorizontal: 5,
    borderRadius: 8,
    marginTop: 30,
    paddingVertical: 8,
    gap: 8,
  },
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
});
