import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Setting = () => {
  return (
    <Layout style={styles.contentContainer}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>OFF</Text>
      </TouchableOpacity>
    </Layout>
  );
};

export default Setting;

const styles = StyleSheet.create({
  contentContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  button: {
    height: 200, // 70% of height device screen
    width: 200,
    borderRadius: 150,
    borderWidth: 6,
    backgroundColor: '#02142b',
    borderColor: '#02142b',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    letterSpacing: 2,
    color: '#fff',
  },
});
