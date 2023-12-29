import 'react-native-gesture-handler';
import * as React from 'react';
import RootNavigator from './src/navigation';
import { SafeAreaView, Text, View } from 'react-native';


export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffff' }}>
        <RootNavigator />
    </SafeAreaView>
  );
}