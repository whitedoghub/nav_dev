import React, { useState } from 'react';
import { TextInput, Button } from 'react-native';

// 주의 : navigation -> (x), ({ navigation }) -> (O)
const CreatePostScreen = ({ navigation }) => {
  const [postText, setPostText] = useState('');
  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="done"
        onPress={() => navigation.navigate('Home', { post: postText })}
      />
    </>
  );
};

export default CreatePostScreen;
