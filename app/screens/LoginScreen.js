import React from 'react'
import { Dimensions, Alert, TouchableOpacity, TextInput, ImageBackground, StyleSheet, Text, View } from 'react-native'


export default function LoginScreen() {
    return (

        <ImageBackground 
        resizeMode='stretch'
        source={require('../assets/home.jpg')} 
        style={styles.home}>

            <View style={styles.box} >
                    <TextInput  
                        style={styles.inputText}
                        placeholder="Email..." 
                        placeholderTextColor="#003f5c"
                        autoCompleteType={'email'}
                        keyboardType={'email-address'}
                        selectionColor={"aqua"}
                        selectTextOnFocus={true}
                        
                       />
                    <TextInput  
                        style={styles.inputText}
                        placeholder="Password..." 
                        placeholderTextColor="#003f5c"
                        secureTextEntry={true}
                        autoCompleteType={'password'}
                        />

                <TouchableOpacity>
                    <Text style={styles.forgot}>Forgot Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.loginBtn}>
                    <Text style={styles.loginText}>LOGIN</Text>
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <Text style={styles.loginText}>Already Have An Account? Signup</Text>
                </TouchableOpacity>
                
            </View>

        </ImageBackground>
    )
}

//const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    home: {
        top: 20,
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    box: {
        justifyContent: 'center',
        backgroundColor: 'transparent',
        //borderWidth:1,
        //borderColor: '#f8f9f9',
        height: "45%",
        width: "60%",
        alignItems: "center"
    },
    inputText: {
        left: "30%",
        width: 200,
        height:50,
        color:"white"
        },
    forgot: {
        color:"white",
        fontSize:13
        },
    loginBtn: {
            width:"50%",
            backgroundColor:"#fb5b5a",
            borderRadius:25,
            height:50,
            alignItems:"center",
            justifyContent:"center",
            marginTop:40,
            marginBottom:10
        },
    loginText: {
            color:"white",
            fontSize:13
        }
})

