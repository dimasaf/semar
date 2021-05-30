import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Layout, Text, Button, Toggle} from '@ui-kitten/components';
import LinearGradient from 'react-native-linear-gradient';
import {AirIcon} from '../../assets/';

import {ThemeContext} from '../../Theme/';

const Home = () => {
  const themeContext = React.useContext(ThemeContext);
  const [activeChecked, setActiveChecked] = React.useState({});

  return (
    <ScrollView style={styles.contentContainer}>
      <Layout style={styles.titleContainer}>
        <Text category="h1" style={{fontWeight: 'bold'}}>
          Semar
        </Text>
        <Text category="h6">your smart greenhouse solution</Text>
        {/* <Button style={{marginVertical: 4}} onPress={themeContext.toggleTheme}>
          TOGGLE THEME
        </Button> */}
        <Toggle
          style={styles.toggle}
          checked={activeChecked}
          onChange={() => {
            setActiveChecked(themeContext.toggleTheme());
          }}>
          Active
        </Toggle>
      </Layout>

      <Layout style={styles.cardContainer}>
        <LinearGradient colors={['#21C8F6', '#637BFF']} style={styles.card}>
          <View>
            <AirIcon />
            <Text
              category="h5"
              appearance="alternative"
              style={{fontWeight: '900'}}>
              Suhu Udara
            </Text>
          </View>
          <View>
            <Text
              category="h1"
              appearance="alternative"
              style={{
                alignSelf: 'flex-end',
              }}>
              24°C
            </Text>
          </View>
        </LinearGradient>
        <LinearGradient colors={['#6EDCC4', '#1AAB8B']} style={styles.card}>
          <View>
            <AirIcon />
            <Text
              category="h5"
              appearance="alternative"
              style={{fontWeight: '900'}}>
              Suhu Udara
            </Text>
          </View>
          <View>
            <Text
              category="h1"
              appearance="alternative"
              style={{
                alignSelf: 'flex-end',
              }}>
              24°C
            </Text>
          </View>
        </LinearGradient>
        <LinearGradient colors={['#FFC73C', '#F19A1A']} style={styles.card}>
          <View>
            <AirIcon />
            <Text
              category="h5"
              appearance="alternative"
              style={{fontWeight: '900'}}>
              Kelembaban
            </Text>
          </View>
          <View>
            <Text
              category="h1"
              appearance="alternative"
              style={{
                alignSelf: 'flex-end',
              }}>
              87%
            </Text>
          </View>
        </LinearGradient>
        <LinearGradient colors={['#F44881', '#EC454F']} style={styles.card}>
          <View>
            <AirIcon />
            <Text
              category="h5"
              appearance="alternative"
              style={{fontWeight: '900'}}>
              Suhu Udara
            </Text>
          </View>
          <View>
            <Text
              category="h1"
              appearance="alternative"
              style={{
                alignSelf: 'flex-end',
              }}>
              87%
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
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'flex-start',
  },
  card: {
    height: 225,
    width: 176,
    backgroundColor: '#14A2C4',
    borderRadius: 18,
    margin: 6,
    marginVertical: 8,
    padding: 16,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
