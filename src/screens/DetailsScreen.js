import React from 'react';
import { View, Text, Button } from 'react-native';

const DetailsScreen = ({ navigation, route }) => {
  const { itemId } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>DetailsScreen</Text>
      <Text>itemId : {JSON.stringify(itemId)}</Text>
      <Button
        title="Go To Details.. again"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default DetailsScreen;
