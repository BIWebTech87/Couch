import React from 'react';
import {Text, Image, StyleSheet, TouchableOpacity, View} from 'react-native';

const NavBar = () => {
    return (
        <View>
            <Image source={require('../../../assets/logo.jpg')} style={styles.logo}/>
            <TouchableOpacity onPress={() => console.log('Go Home')}>
                <Text style={{fontSize: 18}}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Go About')}>
                <Text style={{fontSize: 18}}>About</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Go Contact')}>
                <Text style={{fontSize: 18}}>Contact</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Go Mark Consult')}>
                <Text style={{fontSize: 18}}>Mark Consult</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 20,
        backgroundColor: '#f8f8f8',
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    link: {
        fontSize: 18,
        color: '#007AFF',
        marginVertical: 5,
    },
});

export default NavBar;