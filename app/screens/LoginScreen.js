import * as React from 'react'
import { Pressable, Dimensions, Alert, TouchableOpacity, TextInput, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


export default function LoginScreen({navigation}) {
    return (

        <SafeAreaView>
        <ImageBackground 
        resizeMode='stretch'
        source={require('../assets/home.jpg')} 
        style={styles.home}>

            <View style={styles.box} >
                    <TextInput  
                        style={styles.inputText}
                        placeholder="Email..." 
                        placeholderTextColor="white"
                        autoCompleteType={'email'}
                        keyboardType={'email-address'}
                        selectionColor={"aqua"}
                        selectTextOnFocus={true}
                        
                       />
                    <TextInput  
                        style={styles.inputText}
                        placeholder="Password..." 
                        placeholderTextColor="white"
                        secureTextEntry={true}
                        autoCompleteType={'password'}
                        />

                <TouchableOpacity>
                    <Text style={styles.forgot}>Forgot Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.loginBtn}>
                    <Text style={styles.loginText}>LOGIN</Text>
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <Text onPress={() => navigation.navigate("SignUp")} style={styles.loginText}>Already Have An Account? Signup</Text>
                </TouchableOpacity>
                
            </View>

        </ImageBackground>
        </SafeAreaView>
    )
}

//const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    home: {
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
        fontSize:13,
        marginTop: 20
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

