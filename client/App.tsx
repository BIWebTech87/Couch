import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import NavBar from './src/components/NavBar/NavBar';


const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <NavBar/>
            <StatusBar style="auto"/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginTop: 0,
        width: '100%',
    },
});

export default App;