import { SafeAreaView, StyleSheet, View, Text } from 'react-native';

import React from 'react';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/*This is where we start */}
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <Text style={{ fontSize: 30, textAlign: 'center', fontWeight: 'bold' }}>
          Welcome to my first React Native Workshop 👋🏻
        </Text>
        <Text style={{ fontSize: 20, textAlign: 'center', marginHorizontal: 20, marginTop: 50 }}>
          Bare with me and do not heistate to ask questions 🙋🏻‍♂️
        </Text>
      </View>
      {/*All this can be deleted */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
