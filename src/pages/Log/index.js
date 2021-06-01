import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';
import {LineChart} from 'react-native-chart-kit';

const Log = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ['Rainy Days'], // optional
  };

  const screenWidth = Dimensions.get('window').width;

  return (
    <Layout style={{flex: 1}}>
      <Text category="h4" style={{alignSelf: 'center'}}>
        Daily Log
      </Text>
      <LineChart
        data={data}
        width={screenWidth} // from react-native
        height={200}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={{
          margin: 8,
          borderRadius: 16,
        }}
      />
    </Layout>
  );
};

export default Log;

const styles = StyleSheet.create({});
