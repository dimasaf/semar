import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import {BackIcon} from '../../assets/';

const Index = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <BackIcon
        style={{
          backgroundColor: '#1C2238',
          borderRadius: 12,
        }}
      />
    </TouchableOpacity>
  );
};

export default Index;

const styles = StyleSheet.create({});
