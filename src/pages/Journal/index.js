import React, {useEffect} from 'react';
import {StyleSheet, View, TouchableOpacity, FlatList} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';
import axios from 'axios';

const Content = ({item}) => {
  return (
    <View style={styles.content}>
      <View>
        <Text style={{color: 'white', fontSize: 24, padding: 6}}>
          {item.title}
        </Text>
        <Text style={{color: 'white', padding: 6, overflow: 'hidden'}}>
          {item.description}
        </Text>
      </View>
    </View>
  );
};

const Journal = ({navigation}) => {
  const [data, setData] = React.useState([]);

  const getData = async () => {
    try {
      const response = await axios.get('http://10.0.2.2:3000/journal');
      setData(response.data);
      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout style={styles.container}>
      <Text>Journal</Text>

      <FlatList
        data={data}
        renderItem={Content}
        keyExtractor={(item) => String(item.id)}
      />

      {/* {users.map((d) => {
        return <Text>{d.title}</Text>;
      })} */}

      {/* <Text style={styles.text}>No Journal yet</Text> */}
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
    height: 100,
  },
});
