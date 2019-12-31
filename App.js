import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from  './screens/Login';
import Main from './screens/Main';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Login!</Text>
//     </View>
//   );
// }

// export default class App extends React.Component {
//   render() {
//     return <Login/>
//   }
// }

const MainNavigator = createStackNavigator({
  Login: {screen: Login},
  Main: {screen: Main},
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
}
);

const App = createAppContainer(MainNavigator);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
