import React from 'react';
import {StyleSheet, TouchableOpacity, FlatList, View} from 'react-native';
import BackButton from '../../components/BackButton/';
import {Layout, Text} from '@ui-kitten/components';

const Index = ({navigation, route}) => {
  const {itemId, title, desc, date} = route.params;

  return (
    <Layout style={styles.container}>
      <View style={styles.header}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <View style={{marginHorizontal: 12, marginTop: 20}}>
        <Text style={{fontSize: 42, fontWeight: 'bold'}}>{title}</Text>
        <Text style={{fontSize: 20, opacity: 0.5, marginVertical: 10}}>
          {date}
        </Text>
        <Text style={{fontSize: 18}}>{desc}</Text>
      </View>
    </Layout>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
