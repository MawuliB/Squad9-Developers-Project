import React from 'react'
import { StyleSheet, Text, View, Platform, Linking, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const dialCall = () => {
 
    let phoneNumber = '';
 
    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${+233244065972}';
    }
    else {
      phoneNumber = 'telprompt:${+233244065972}';
    }
 
    Linking.openURL(phoneNumber);
  };

  const sendEmail = () => {
 
    let email = 'mailto:mawulibadassou5@gmail.com';
 
    Linking.openURL(email);
  };

  const locate = () => {

    let fullAddress = ""

  const url = Platform.select({
    ios: `maps:0,0?q=${fullAddress}`,
    android: `geo:0,0?q=${fullAddress}`,
  })
  
  Linking.openURL(url)
  }

export default function Contact({ navigation }) {
    return (
        <View style={styles.MainContainer}>
   
          <TouchableOpacity onPress={dialCall} activeOpacity={0.7} style={styles.button} >
            <Text style={styles.TextStyle}>CALL US</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={sendEmail} activeOpacity={0.7} style={styles.button} >
            <Text style={styles.TextStyle}>EMAIL US</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={locate} activeOpacity={0.7} style={styles.button} >
            <Text style={styles.TextStyle}>LOCATE US</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Message')} activeOpacity={0.7} style={styles.button} >
            <Text style={styles.TextStyle}>SEND US A MESSAGE</Text>
          </TouchableOpacity>
   
   
        </View>
   
      );
    }
   
  const styles = StyleSheet.create({
   
    MainContainer: {
      flex: 1,
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    button: {
   
      width: '80%',
      padding: 6,
      backgroundColor: 'azure',
      borderRadius: 7,
      shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
   
    TextStyle: {
      color: 'black',
      fontSize: 35,
      textAlign: 'center',
    }
   
  });
