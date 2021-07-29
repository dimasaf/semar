import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';

const Content = ({title, createdAt, onPress}) => {
  return (
    <TouchableOpacity style={styles.content} onPress={onPress}>
      <Text style={{color: 'white', fontSize: 24}}>{title}</Text>
      <Text
        style={{
          color: 'white',
          overflow: 'hidden',
          fontWeight: '100',
          opacity: 0.4,
        }}>
        {createdAt}
      </Text>
    </TouchableOpacity>
  );
};

export default Content;

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
