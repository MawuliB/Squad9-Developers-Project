import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


export default function Gallery() {
    return (
        <View style={styles.main}>
            <Text>Gallery</Text>
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
