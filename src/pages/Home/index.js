import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Layout, Text, Toggle} from '@ui-kitten/components';
import LinearGradient from 'react-native-linear-gradient';
import {AirIcon} from '../../assets/';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {io} from 'socket.io-client';

import {ThemeContext} from '../../Theme/';

// import axios from 'axios';

const Home = () => {
  const socket = io.connect('http://10.0.2.2:3000');

  const themeContext = React.useContext(ThemeContext);
  const [activeChecked, setActiveChecked] = React.useState({});
  // const [data, setData] = React.useState([]);

  const [tempperature, setTempperature] = React.useState();
  const [humadinity, setHumadinity] = React.useState();
  const [soilmoinsture, setSoilMoinsture] = React.useState();
  const [lightSensor, setLightSensor] = React.useState();

  // const getData = async () => {
  //   try {
  //     const response = await axios.get('http://10.0.2.2:3000/dashboard');
  //     setData(response.data);
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  React.useEffect(() => {
    // getData();

    socket.on('data', (data) => {
      setTempperature(data.Temperature);
      setHumadinity(data.Humidinity);
      setSoilMoinsture(data.SoilMoinsture);
      setLightSensor(data.LightSensor);
      // socket.emit('receivedFromClient', {my: 'data 1'});
    });
  }, [socket]);

  return (
    <ScrollView style={styles.contentContainer}>
      <Layout style={styles.titleContainer}>
        <View style={styles.titleHeading}>
          <Text category="h1" style={styles.title}>
            Semar
          </Text>
          <Toggle
            checked={activeChecked}
            onChange={() => {
              setActiveChecked(themeContext.toggleTheme());
            }}
          />
        </View>

        <Text category="h6">your smart greenhouse solution</Text>

        {/* <Button style={{marginVertical: 4}} onPress={themeContext.toggleTheme}>
          TOGGLE THEME
        </Button> */}
      </Layout>

      <Layout style={styles.cardContainer}>
        <LinearGradient colors={['#21C8F6', '#637BFF']} style={styles.card}>
          <View>
            <AirIcon />
            <Text
              category="h5"
              appearance="alternative"
              style={styles.cardText}>
              Tempperature
            </Text>
          </View>
          <View>
            <Text
              category="h1"
              appearance="alternative"
              style={styles.cardContentText}>
              {tempperature}
            </Text>
          </View>
        </LinearGradient>
        <LinearGradient colors={['#6EDCC4', '#1AAB8B']} style={styles.card}>
          <View>
            <AirIcon />
            <Text
              category="h5"
              appearance="alternative"
              style={styles.cardText}>
              Humadinity
            </Text>
          </View>
          <View>
            <Text
              category="h1"
              appearance="alternative"
              style={styles.cardContentText}>
              {humadinity}
            </Text>
          </View>
        </LinearGradient>
        <LinearGradient colors={['#FFC73C', '#F19A1A']} style={styles.card}>
          <View>
            <AirIcon />
            <Text
              category="h5"
              appearance="alternative"
              style={styles.cardText}>
              Soil Moinsture
            </Text>
          </View>
          <View>
            <Text
              category="h1"
              appearance="alternative"
              style={styles.cardContentText}>
              {soilmoinsture}
            </Text>
          </View>
        </LinearGradient>
        <LinearGradient colors={['#F44881', '#EC454F']} style={styles.card}>
          <View>
            <AirIcon />
            <Text
              category="h5"
              appearance="alternative"
              style={styles.cardText}>
              Light Sensor
            </Text>
          </View>
          <View>
            <Text
              category="h1"
              appearance="alternative"
              style={styles.cardContentText}>
              {lightSensor}
            </Text>
          </View>
        </LinearGradient>
      </Layout>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  contentContainer: {flex: 1},
  titleContainer: {padding: 24, paddingTop: 50},
  titleHeading: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  title: {fontWeight: 'bold'},
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'flex-start',
  },
  card: {
    height: hp('36%'), // 70% of height device screen
    width: wp('42%'),
    backgroundColor: '#14A2C4',
    borderRadius: 18,
    margin: 6,
    marginVertical: 8,
    padding: 16,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardText: {fontWeight: '900', paddingTop: 6},
  cardContentText: {
    alignSelf: 'flex-end',
  },
});
