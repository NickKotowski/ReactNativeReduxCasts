import React from 'react';
import { View, ActivityIndicator } from 'react-native';

//activity indicator is part of react-native library, either the size is passed in (so small)
//but by default it will be set to 'large'
const Spinner = ({ size }) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
};

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export { Spinner };
