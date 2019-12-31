import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Alert } from 'react-native';

class Home extends React.Component {
    static navigationOptions = {
        //To hide the ActionBar/NavigationBar
        header: null,
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>This is Home</Text>
            </View>
        )
    }
}

export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });