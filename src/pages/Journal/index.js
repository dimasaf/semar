/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';
import {Content} from '../../components/index';
import axios from 'axios';

const Journal = ({navigation}) => {
  const [notes, setNotes] = React.useState([]);

  const getData = async () => {
    try {
      const response = await axios.get('http://10.0.2.2:3000/journals');
      setNotes(response.data.journals);
      // console.log(notes);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getData();
  });

  return (
    <Layout style={styles.container}>
      <Text category="h4" style={styles.title}>
        Journal
      </Text>

      {/* <Text style={styles.text}>No Journal yet</Text> */}
      <FlatList
        data={notes}
        keyExtractor={(item) => String(item._id)}
        renderItem={(itemData) => (
          <Content
            title={itemData.item.title}
            createdAt={itemData.item.createdAt}
            onPress={() =>
              navigation.navigate('Detail', {
                desc: itemData.item.description,
                date: itemData.item.createdAt,
                itemId: itemData.item._id,
                title: itemData.item.title,
              })
            }
          />
        )}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Add');
        }}>
        <Text style={styles.menu}>+</Text>
      </TouchableOpacity>
    </Layout>
  );
};

export default Journal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    alignSelf: 'center',
    paddingVertical: 12,
  },
  text: {
    alignSelf: 'center',
  },
  button: {
    position: 'absolute',
    zIndex: 11,
    right: 25,
    bottom: 25,
    backgroundColor: '#E91E63',
    width: 75,
    height: 75,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  menu: {
    color: 'white',
    fontSize: 32,
  },
  content: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    backgroundColor: '#02142b',
    borderRadius: 10,
    margin: 20,
    padding: 20,
    height: 120,
    justifyContent: 'space-between',
  },
});
