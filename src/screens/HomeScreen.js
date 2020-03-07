import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation, route }) => {
  const { itemId } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>HomeScreen (itemId : {JSON.stringify(itemId)})</Text>
      <Button
        title="Go To Details"
        onPress={() => navigation.navigate('Details', { itemId: 109 })}
      />
    </View>
  );
};

export default HomeScreen;
