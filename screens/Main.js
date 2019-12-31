import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {Ionicons, FontAwesome} from 'react-native-vector-icons';
import Home from './stack/Home';
import Event from './stack/Event';

// class Main extends React.Component {
//     static navigationOptions = {
//         //To hide the ActionBar/NavigationBar
//         header: null,
//     };
//     render() {
//         return (
//             <View style={style.container}>
//                 <Text style={style.hello}>Xin chào !</Text>
//                 <Text style={style.text}>Huỳnh Tấn Duy</Text>
//                 <Text style={style.text}>0332725110</Text>
                
//             </View>
//         );
//     }
// }

const TabNavigator = createBottomTabNavigator({
	Home: {
		screen: Home,
		navigationOptions: {
			tabBarIcon: ({ focused, tintColor }) => {
				const iconName = `home`;
				return <FontAwesome name={iconName} size={25} color={tintColor} />;
			},
		},
	},
	
	Event: {
		screen: Event,
		navigationOptions: {
		tabBarIcon: ({ focused, tintColor }) => {
			const iconName = `md-chatboxes`;
			return <Ionicons name={iconName} size={25} color={tintColor} />;
		},
		},
	},
	
});

export default createAppContainer(TabNavigator);

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ae2070'
    },
    hello: {
        marginTop: 100,
        marginBottom: 15,
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20 
    },
    text: {
        color:'white',
        fontSize: 20 ,
        marginBottom: 10
    },
    input: {
        backgroundColor: 'white',
        height: 50,
        width: 300,
        borderRadius: 20,
        textAlign: 'center'
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'black',
        opacity: 0.2,
        padding: 10,
        borderRadius: 20,
        height: 50,
        width: 300,
        marginTop:10
    },
    opacity: {
        opacity: 1,
        fontWeight: 'bold',
        color: 'white'
    }
    
    

})