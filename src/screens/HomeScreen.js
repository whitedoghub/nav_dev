import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation, route }) => {
  useEffect(() => {
    if (route.params?.post) {
      // Post update, do something with 'route.params.post'
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route.params?.post]);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>HomeScreen</Text>
      <Button
        title="Go To Details"
        onPress={() => navigation.push('Details', { itemId: 109 })}
      />
      <Button
        title="Create Post"
        onPress={() => navigation.navigate('CreatePost')}
      />
      <Text style={{ margin: 10 }}>Post : {route.params?.post}</Text>
      <Button
        title="Update title"
        onPress={() => navigation.setOptions({ title: 'changedTitle' })}
      />
    </View>
  );
};

export default HomeScreen;
