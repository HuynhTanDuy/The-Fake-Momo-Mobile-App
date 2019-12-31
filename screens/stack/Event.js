import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Alert } from 'react-native';

class Event extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>This is Events</Text>
            </View>
        )
    }
}

export default Event;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });