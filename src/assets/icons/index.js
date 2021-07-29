import React from 'react';
import {Image} from 'react-native';

const IconProvider = (source) => ({
  toReactElement: ({animation, ...props}) => (
    <Image {...props} source={source} />
  ),
});

export const AssetIconsPack = {
  name: 'assets',
  icons: {
    home: IconProvider(require('../icons/home.png')),
    journal: IconProvider(require('../icons/journal.png')),
    log: IconProvider(require('../icons/log.png')),
    setting: IconProvider(require('../icons/setting.png')),
    air: IconProvider(require('../icons/air.png')),
    back: IconProvider(require('../icons/back.png')),
  },
};
