import React from 'react';
import { Image } from 'react-native';

const LogoTitle = () => {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('../assets/logo.png')}
    />
  );
};

export default LogoTitle;
