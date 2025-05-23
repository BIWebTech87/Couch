// NavBar.styles.js
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    fullNavBar: {
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        backgroundColor: '#eae3db',
    },

    logo_container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
    },
    logo_text:{
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    links_list: {
        flexDirection: 'row',
    },
    link: {
        backgroundColor: '#4fa',
        padding: 10,
        margin: 5,
        borderRadius: 5,
    },
    lng: {
        flexDirection: 'row',
    },
    lng_obj_container: {
        width: 50,
        height: 50,
        margin: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007AFF',
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    lng_obj: {
        zIndex: 2,
        fontWeight: 'bold',
        color: '#007AFF',
    },
    activeLng: {
        color: '#fff',
    },
    flagHorizontal: {
        ...StyleSheet.absoluteFillObject,
        flexDirection: 'column',
        zIndex: 1,
        color: '#cc1616',
    },
    flagVertical: {
        ...StyleSheet.absoluteFillObject,
        flexDirection: 'row',
        zIndex: 1,
    },
    colorBlack: {
        color: '#000',
    }
});

export default styles;
