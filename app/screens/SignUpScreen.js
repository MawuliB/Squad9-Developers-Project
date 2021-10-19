import React from 'react'
import { Dimensions, Alert, SafeAreaView, TouchableOpacity, TextInput, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import colors from '../colors'

export default function SignUpScreen() {
    return (
        <SafeAreaView>     
        <ImageBackground 
        resizeMode='stretch'
        source={require('../assets/home.jpg')} 
        style={styles.home}>

            <View style={styles.box} >
                       <TextInput  
                        style={styles.inputText}
                        placeholder="First Name..." 
                        placeholderTextColor="#FFFFFF"
                        autoCompleteType={'name'}
                        selectionColor={"aqua"}
                        selectTextOnFocus={true}
                       />
                       <TextInput  
                       style={styles.inputText}
                       placeholder="Last Name..." 
                       placeholderTextColor="#FFFFFF"
                       autoCompleteType={'name'}
                       selectionColor={"aqua"}
                       selectTextOnFocus={true}
                      />
                        <TextInput  
                            style={styles.inputText}
                            placeholder="Email..." 
                            placeholderTextColor="#FFFFFF"
                            autoCompleteType={'email'}
                            keyboardType={'email-address'}
                            selectionColor={"aqua"}
                            selectTextOnFocus={true}
                           />
                        <TextInput  
                        style={styles.inputText}
                        placeholder="Password..." 
                        placeholderTextColor= "#FFFFFF"
                        secureTextEntry={true}
                        autoCompleteType={'password'}
                        />

                        <TextInput  
                        style={styles.inputText}
                        placeholder="Confirm Password..." 
                        placeholderTextColor="#FFFFFF"
                        secureTextEntry={true}
                        autoCompleteType={'password'}
                        />



                <TouchableOpacity style={styles.loginBtn}>
                    <Text style={styles.loginText}>SIGNUP</Text>
                </TouchableOpacity>
                
                
            </View>

        </ImageBackground>
        </SafeAreaView>
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
        height: 500,
        width: 200,
        alignItems: "center",
    },
    inputText: {
        left: "30%",
        width: 200,
        height:50,
        color:"#FFFFFF"
        },
    forgot: {
        color:"#FFFFFF",
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
            color:"#FFFFFF",
            fontSize:13
        }
})
