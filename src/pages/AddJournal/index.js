import React from 'react';
import {StyleSheet, Button} from 'react-native';
import {Layout, Input} from '@ui-kitten/components';
import axios from 'axios';

const Index = () => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');

  const ID = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
  };

  const submit = async () => {
    const data = {
      id: ID,
      title,
      description,
    };
    try {
      const response = await axios.post('http://10.0.2.2:3000/journal', data);
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Layout style={styles.container}>
      <Input
        placeholder="your title here"
        style={styles.title}
        value={title}
        onChangeText={(nextValue) => setTitle(nextValue)}
      />
      <Input
        multiline={true}
        style={styles.title}
        textStyle={{minHeight: 124}}
        placeholder="Description"
        value={description}
        onChangeText={(nextValue) => setDescription(nextValue)}
      />
      <Button onPress={submit} title="Learn More" style={styles.title} />
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
    marginHorizontal: 12,
  },
});
