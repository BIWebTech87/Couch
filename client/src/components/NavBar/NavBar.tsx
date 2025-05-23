import React, { useState } from 'react';
import { Text, Image, SafeAreaView, TouchableOpacity, View } from 'react-native';
import styles from './NavBar.styles';

const handleLinkClick = (linkName: string) => {
  console.log(`Go ${linkName}`);
};

const links = ['Home', 'About', 'Contact', 'Mark Consult'];
const lang = ['PT', 'EN', 'RU', 'RO'];

const NavBar = () => {
  const [activeLang, setActiveLang] = useState('EN');

  const renderFlagBackground = (code: string) => {
    switch (code) {
      case 'RU':
        return (
          <View style={styles.flagHorizontal}>
            <View style={{ flex: 1, backgroundColor: '#fff' }} />
            <View style={{ flex: 1, backgroundColor: '#0033a0' }} />
            <View style={{ flex: 1, backgroundColor: '#d52b1e' }} />
          </View>
        );
      case 'PT':
        return (
          <View style={styles.flagVertical}>
            <View style={{ flex: 1, backgroundColor: '#006600' }} />
            <View style={{ flex: 1, backgroundColor: '#ff0000' }} />
          </View>
        );
      case 'EN':
        return (
          <View style={styles.flagHorizontal}>
            <View style={{ flex: 1, backgroundColor: '#d80027' }} />
            <View style={{ flex: 1, backgroundColor: '#fff' }} />
            <View style={{ flex: 1, backgroundColor: '#d80027' }} />
          </View>
        );
      case 'RO':
        return (
          <View style={styles.flagVertical}>
            <View style={{ flex: 1, backgroundColor: '#002b7f' }} />
            <View style={{ flex: 1, backgroundColor: '#fcd116' }} />
            <View style={{ flex: 1, backgroundColor: '#ce1126' }} />
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      <View style={styles.fullNavBar}>
        <View style={styles.logo_container}>
          <Image source={require('../../../assets/images/logo.png')} style={styles.logo} />
          <Text style={styles.logo_text}>Natasha Couch</Text>
        </View>

        <View style={styles.links_list}>
          {links.map((link) => (
            <TouchableOpacity key={link} onPress={() => handleLinkClick(link)}>
              <Text style={styles.link}>{link}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.lng}>
          {lang.map((code) => (
            <TouchableOpacity
              key={code}
              onPress={() => {
                handleLinkClick(code);
                setActiveLang(code);
              }}
              style={styles.lng_obj_container}
            >
              {activeLang === code && renderFlagBackground(code)}
              <Text
                style={[
                  styles.lng_obj,
                  activeLang === code && styles.activeLng,
                  activeLang === code && code === 'EN' && styles.colorBlack,
                ]}
              >
                {code}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NavBar;
