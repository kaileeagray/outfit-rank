import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function CreatePollScreen({ navigation }) {
  const [eventName, setEventName] = useState('');
  const [outfitPhoto, setOutfitPhoto] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Outfit Poll 🛍️</Text>
      <TextInput
        style={styles.input}
        placeholder="Event Name"
        value={eventName}
        onChangeText={setEventName}
      />
      <TextInput
        style={styles.input}
        placeholder="Outfit Photo URL"
        value={outfitPhoto}
        onChangeText={setOutfitPhoto}
      />
      <Button title="Submit Poll" onPress={() => alert('Poll Created!')} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
});
