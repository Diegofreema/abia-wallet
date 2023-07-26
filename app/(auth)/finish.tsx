import { StyleSheet, View, ScrollView, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import React from 'react';
import { Link, Stack } from 'expo-router';
import { Button, Icon, Text } from '@rneui/themed';
import { useState } from 'react';
import { generateStyles } from '@/constants/styles';
import TextInput from '@/components/Input';
import { states } from '@/utils/states';

type Props = {};

const Finish = (props: Props) => {
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };
  const [origin, setOrigin] = useState('Abia');
  const [currentState, setCurrentState] = useState('Abia');
  const [gender, setGender] = useState();
  const [date, setDate] = useState(new Date());
  console.log;

  const [mode, setMode] = useState<any>('date');
  const [show, setShow] = useState(false);
  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode: any) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };
  return (
    <ScrollView
      style={[generateStyles.container]}
      showsVerticalScrollIndicator={false}
    >
      <Stack.Screen
        options={{
          headerRight: () => (
            <Link href={'/almost'} style={{ color: 'blue', fontSize: 20 }}>
              Skip
            </Link>
          ),
          headerShown: true,
        }}
      />
      <Text h4>Finish Your Account Setup</Text>
      <View style={{ marginVertical: 30, paddingBottom: 30 }}>
        <TextInput
          label="Home Address"
          placeholder="Enter your current home address"
        />
        <View style={styles.picker}>
          <Text h4 style={styles.text}>
            Country
          </Text>
          <View
            style={{ borderWidth: 1, borderColor: 'black', borderRadius: 5 }}
          >
            <Picker selectedValue={'Nigeria'}>
              <Picker.Item label="Nigeria" value="nigeria" />
            </Picker>
          </View>
        </View>
        <View style={styles.picker}>
          <Text h4 style={styles.text}>
            State Of Origin
          </Text>
          <View
            style={{ borderWidth: 1, borderColor: 'black', borderRadius: 5 }}
          >
            <Picker
              selectedValue={origin}
              onValueChange={(item, index) => setOrigin(item)}
            >
              {states.map((state) => (
                <Picker.Item key={state} label={state} value={state} />
              ))}
            </Picker>
          </View>
        </View>
        <View style={styles.picker}>
          <Text h4 style={styles.text}>
            Current State
          </Text>
          <View
            style={{ borderWidth: 1, borderColor: 'black', borderRadius: 5 }}
          >
            <Picker
              selectedValue={currentState}
              onValueChange={(item) => setCurrentState(item)}
            >
              {states.map((state) => (
                <Picker.Item key={state} label={state} value={state} />
              ))}
            </Picker>
          </View>
        </View>
        <TextInput label="City" placeholder="Enter your city" />
        <TextInput label="Zip Code" placeholder="Enter your zip code" />
        <View style={styles.picker}>
          <Text h4 style={styles.text}>
            Select Date Of Birth
          </Text>
          <Pressable onPress={showMode} style={styles.date}>
            <Text> {date.toLocaleString().split(',')[0]}</Text>
            <Icon name="event" />
          </Pressable>
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={onChange}
          />
        )}
        <View style={styles.picker}>
          <Text h4 style={styles.text}>
            Select Gender
          </Text>
          <View
            style={{ borderWidth: 1, borderColor: 'black', borderRadius: 5 }}
          >
            <Picker
              selectedValue={gender}
              onValueChange={(item) => setGender(item)}
            >
              <Picker.Item label={'Male'} value={'Male'} />
              <Picker.Item label={'Female'} value={'Female'} />
            </Picker>
          </View>
        </View>
        <TextInput label="Occupation" placeholder="Enter your occupation" />
        <Link href={'/almost'} asChild>
          <Button title="Continue" radius={'md'} buttonStyle={{ height: 50 }} />
        </Link>
      </View>
    </ScrollView>
  );
};

export default Finish;

const styles = StyleSheet.create({
  text: {
    marginBottom: 10,
    fontWeight: 'bold',
  },
  picker: {
    marginBottom: 10,
    marginHorizontal: 10,
  },
  date: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    borderColor: 'black',
    borderWidth: 1,
    padding: 15,
    marginBottom: 10,
    borderRadius: 7,
  },
});
