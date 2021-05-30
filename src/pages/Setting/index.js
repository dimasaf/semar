import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';

const Setting = () => {
  return (
    <Layout style={styles.contentContainer}>
      <Layout
        styles={{
          borderRadius: 100,
          height: 100,
          width: 100,
          backgroundColor: '#fff',
        }}></Layout>
    </Layout>
  );
};

export default Setting;

const styles = StyleSheet.create({
  contentContainer: {flex: 1},
});
