import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Services() {
    return (
        <View style={styles.main}>
            <Text>Services</Text>
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
