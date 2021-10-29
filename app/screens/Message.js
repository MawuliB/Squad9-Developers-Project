import React from 'react';
import { StyleSheet, Keyboard, Text, View, TextInput, Dimensions, TouchableOpacity, TouchableWithoutFeedback, Platform, KeyboardAvoidingView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window')

export default function Message() {
    return (
            <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{top: 20}}
    >
    

            <View style={styles.topic}>
                <Text style={styles.topicText}>SEND US A MESSAGE</Text>
            </View>
            <View style={styles.message}>
                <TextInput
                placeholder='Full Name'
                autoCorrect={true}
                style={styles.messageText}

                />
                <TextInput
                placeholder='Email'
                keyboardType='email'
                style={styles.messageText}
                />
                <TextInput
                placeholder='Number'
                keyboardType='number-pad'
                style={styles.messageText}
                />
                <TextInput
                placeholder='Topic'
                autoCorrect={true}
                style={styles.messageText}
                />
                <TextInput
                placeholder='Type Message Here'
                autoCorrect={true}
                multiline={true}
                style={styles.messageBox}

                />
            </View>

            <TouchableOpacity style={styles.messageBtn}>
                    <Text style={styles.messageBtnText}>SEND MESSAGE</Text>
                </TouchableOpacity>
               
    </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    topic: {
        top: 20,
        alignSelf: 'center'

    },
    topicText: {
        fontSize: 25,
        color: 'black'
    },
    message: {
        top: 40,
        left: 20,
        justifyContent: 'space-evenly'
    },
    messageText: {
        borderWidth: 2,
        borderColor: 'black',
        height: 40,
        width: width / 2,
        borderRadius: 10,
        marginBottom: 20
    },
    messageBtn: {
            width:"50%",
            backgroundColor:"#fb5b5a",
            borderRadius:25,
            height:50,
            alignItems:"center",
            justifyContent:"center",
            marginTop:40,
            marginBottom:10,
            alignSelf: 'center'
        },
    messageBtnText: {
            color:"white",
            fontSize:13
        },
    messageBox: {
        borderWidth: 2,
        borderColor: 'black',
        height: 150,
        width: width / 1.5,
        borderRadius: 10,
        marginBottom: 20
    }
})
