/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  BottomNavigation,
  BottomNavigationTab,
  Divider,
} from '@ui-kitten/components';
import {HomeIcon, LogIcon, JournalIcon, SettingIcon} from '../../assets/index';

const BottomNavigator = ({state, navigation}) => {
  return (
    <>
      <Divider />
      <BottomNavigation
        style={{paddingVertical: 14}}
        selectedIndex={state.index}
        onSelect={(index) => navigation.navigate(state.routeNames[index])}>
        <BottomNavigationTab icon={HomeIcon} title="Home" />
        <BottomNavigationTab icon={LogIcon} title="Daily Log" />
        <BottomNavigationTab icon={JournalIcon} title="Journal" />
        <BottomNavigationTab icon={SettingIcon} title="Setting" />
      </BottomNavigation>
    </>
  );
};

export default BottomNavigator;
