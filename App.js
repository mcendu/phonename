import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import { OrientationLock } from 'expo-screen-orientation';

export default function App() {
  ScreenOrientation.lockAsync(OrientationLock.LANDSCAPE_LEFT);

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Hello I am</Text>
      <View style={styles.nameBox}>
        <Text style={styles.name}>Nathan</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#110a01',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#f0f0f0',
    textAlign: 'center',
  },
  nameBox: {
    backgroundColor: '#f09910',
    paddingHorizontal: 24,
    borderRadius: 24,
  },
  name: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#110a01',
    textAlign: 'center',
  },
});
