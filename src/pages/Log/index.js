import React, {useState, useEffect} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';
import {LineChart} from 'react-native-chart-kit';
import {ScrollView} from 'react-native-gesture-handler';
import axios from 'axios';

const Log = () => {
  const [results, setResult] = React.useState([]);

  const screenWidth = Dimensions.get('window').width;

  // 192.168.0.38

  const getData = async () => {
    try {
      let response = await axios.get('http://10.0.2.2:3000/home');
      let json = response.data;
      setResult(json.data);
    } catch (error) {
      console.log(error);
    }
  };

  let hump = results.map((item) => {
    return item.avgHum;
  });
  let humpId = results.map((item) => {
    return item._id;
  });
  let temp = results.map((item) => {
    return item.avgTemp;
  });
  let soil = results.map((item) => {
    return item.avgSoil;
  });
  let light = results.map((item) => {
    return item.avgLight;
  });

  const data = {
    labels: humpId,
    datasets: [
      {
        data: hump,
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ['Tempperature /day'], // optional
  };

  React.useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout style={styles.container}>
      <Text category="h4" style={styles.title}>
        Daily Log
      </Text>
      <ScrollView>
        <LineChart
          data={data}
          width={screenWidth} // from react-native
          height={200}
          yAxisSuffix=" C"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: '#637BFF',
            backgroundGradientFrom: '#21C8F6',
            backgroundGradientTo: '#637BFF',
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
        {/* <LineChart
          data={data}
          width={screenWidth} // from react-native
          height={200}
          yAxisSuffix=" C"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: '#6EDCC4',
            backgroundGradientFrom: '#1AAB8B',
            backgroundGradientTo: '#6EDCC4',
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
        <LineChart
          data={data}
          width={screenWidth} // from react-native
          height={200}
          yAxisSuffix=" C"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: '#FFC73C',
            backgroundGradientFrom: '#F19A1A',
            backgroundGradientTo: '#FFC73C',
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
        <LineChart
          data={data}
          width={screenWidth} // from react-native
          height={200}
          yAxisSuffix=" C"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: '#EC454F',
            backgroundGradientFrom: '#F44881',
            backgroundGradientTo: '#EC454F',
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
        /> */}
      </ScrollView>
    </Layout>
  );
};

export default Log;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    alignSelf: 'center',
    paddingVertical: 12,
  },
});
