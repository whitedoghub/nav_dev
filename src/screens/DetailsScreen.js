import React from 'react';
import { View, Text, Button } from 'react-native';

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>DetailsScreen</Text>
      <Button
        title="Go To Details.. again"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default DetailsScreen;
