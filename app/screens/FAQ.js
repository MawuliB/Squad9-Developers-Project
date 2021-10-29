import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import Toast from 'react-native-simple-toast';

//Toast.show('This is a toast.');
//Toast.show('This is a long toast.', Toast.LONG);
//Toast.showWithGravity("Ok", Toast.LONG)

export default function FAQ() {
    return (
        <View style={styles.main}>
            <TouchableOpacity onPress={() => Toast.show('Frequently Asked Questions', Toast.LONG)}>
            <Text>FAQ</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        justifyContent: "center",
        alignSelf: "center",
        padding: 100
    }
})
