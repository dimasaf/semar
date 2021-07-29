import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Layout, Input, Text, styled} from '@ui-kitten/components';
import BackButton from '../../components/BackButton/';

import axios from 'axios';

const Index = ({navigation}) => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');

  const submit = async () => {
    const data = {
      title,
      description,
    };
    try {
      const response = await axios.post('http://10.0.2.2:3000/journal', data);
      console.log(response.data);
      // alert('sukses');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Layout style={styles.container}>
      <View style={styles.header}>
        <BackButton onPress={() => navigation.goBack()} />
        <TouchableOpacity style={styles.btn} onPress={submit}>
          <Text>Save</Text>
        </TouchableOpacity>
      </View>

      <Input
        placeholder="Title "
        style={styles.title}
        textStyle={{
          fontSize: 20,
          minHeight: 52,
        }}
        value={title}
        onChangeText={(nextValue) => setTitle(nextValue)}
      />
      <Input
        placeholder="Type something .."
        multiline={true}
        style={styles.title}
        textStyle={{minHeight: 200, fontSize: 18}}
        value={description}
        onChangeText={(nextValue) => setDescription(nextValue)}
      />
      {/* <Button onPress={submit} title="Submit" style={styles.btn} /> */}
    </Layout>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginTop: 24,
    marginHorizontal: 14,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 20,
    marginHorizontal: 12,
  },
  btn: {
    backgroundColor: '#233e8b',
    paddingVertical: 16,
    paddingHorizontal: 36,
    borderRadius: 12,
  },
});
