import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Alert } from 'react-native';

export default class Login extends React.Component {
    render() {
        return (
            <View style={style.container}>
                <Text style={style.hello}>Xin chào !</Text>
                <Text style={style.text}>Huỳnh Tấn Duy</Text>
                <Text style={style.text}>0332725110</Text>
                <TextInput
                    style={style.input}
                    placeholder="Nhập mật khẩu"
                    keyboardType="numeric"
                >

                </TextInput>
                <TouchableOpacity
                    style={style.button}
                >
                    <Text style={[style.text,style.opacity]}>ĐĂNG NHẬP</Text>
                </TouchableOpacity>
                <View style={{flex: 1,flexDirection:'row',marginTop:20}}>
                    <TouchableOpacity
                        onPress={() => {
                            Alert.alert(
                                'Đặt lại mật khẩu',
                                'Bạn đang yêu cầu đặt lại mật khẩu cho SĐT 0332725110, một mật khẩu tạm thời sẽ được gửi đến SĐT này qua tin nhắn SMS sau khi bạn xác nhận. Bạn có chắc chắn muốn đổi mật khẩu ?',
                                [
                                  {text: 'HỦY BỎ', onPress: () => console.log('Ask me later pressed')},
                                  {text: 'XÁC NHẬN', onPress: () => console.log('OK Pressed')},
                                ],
                                {cancelable: false},
                              );
                        }} 
                        style={{marginRight:60}}>
                             
                        <Text style={{color: 'white'}}> QUÊN MẬT KHẨU </Text>  
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            Alert.alert(
                                'Thoát tài khoản',
                                'Bạn có chắc chắn muốn thoát tài khoản này ?',
                                [
                                  {text: 'HỦY BỎ', onPress: () => console.log('Ask me later pressed')},
                                  {text: 'XÁC NHẬN', onPress: () => console.log('OK Pressed')},
                                ],
                                {cancelable: false},
                              );
                        }}
                         
                        style={{marginRight:0}}>
                             
                        <Text style={{color: 'white'}}> THOÁT TÀI KHOẢN </Text>  
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

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