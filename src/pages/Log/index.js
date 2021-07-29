import React, {useState, useEffect} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';
import {LineChart} from 'react-native-chart-kit';
import {ScrollView} from 'react-native-gesture-handler';
import axios from 'axios';

const Log = () => {
  const screenWidth = Dimensions.get('window').width;

  const [results, setResult] = React.useState([]);

  const getData = async () => {
    try {
      let response = await axios.get('http://10.0.2.2:3000/home');
      let json = response.data;
      setResult(json.data);

      console.log(temp);
    } catch (error) {
      console.log(error);
    }
  };

  let temp = results.map((item) => {
    return item.avgTemp;
  });

  let tempId = results.map((item) => {
    return item._id;
  });

  let hump = results.map((item) => {
    return item.avgHum;
  });
  let humpId = results.map((item) => {
    return item._id;
  });

  let soil = results.map((item) => {
    return item.avgSoil;
  });
  let soilId = results.map((item) => {
    return item._id;
  });

  let light = results.map((item) => {
    return item.avgLight;
  });
  let lightId = results.map((item) => {
    return item._id;
  });

  const dataTemp = {
    labels: tempId,
    datasets: [
      {
        // data: ['1', '2'],
        data: temp,
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ['Tempperature /day'], // optional
  };

  const dataHump = {
    labels: humpId,
    datasets: [
      {
        // data: ['1', '2'],
        data: hump,
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ['Humidity /day'], // optional
  };

  const dataSoil = {
    labels: soilId,
    datasets: [
      {
        // data: ['1', '2'],
        data: soil,
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ['Soil /day'], // optional
  };

  const dataLight = {
    labels: lightId,
    datasets: [
      {
        // data: ['1', '2'],
        data: light,
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ['Light /day'], // optional
  };

  React.useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (temp.length) {
    return (
      <Layout style={styles.container}>
        <Text category="h4" style={styles.title}>
          Daily Log
        </Text>
        <ScrollView>
          <LineChart
            data={dataTemp}
            width={screenWidth} // from react-native
            height={200}
            yAxisSuffix=" C"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: '#637BFF',
              backgroundGradientFrom: '#21C8F6',
              backgroundGradientTo: '#637BFF',
              decimalPlaces: 1, // optional, defaults to 2dp
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
            data={dataHump}
            width={screenWidth} // from react-native
            height={200}
            yAxisSuffix=" %"
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
            data={dataSoil}
            width={screenWidth} // from react-native
            height={200}
            yAxisSuffix=" %"
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
            data={dataLight}
            width={screenWidth} // from react-native
            height={200}
            yAxisSuffix=" %"
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
          />
        </ScrollView>
      </Layout>
    );
  } else {
    return (
      <Layout style={styles.container}>
        <Text></Text>
      </Layout>
    );
  }
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
