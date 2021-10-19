import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function AboutScreen() {
    return (
        <SafeAreaView>
            <ScrollView>
            <Text> Welcome to BB,s Bridal.
                We deal in anything related to weddings, hair and many more.
            </Text>
    </ScrollView>
            </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})
