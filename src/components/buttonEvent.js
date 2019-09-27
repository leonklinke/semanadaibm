import React from 'react';
// import Icon from 'react-native-vector-icons/MaterialIcons';

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
} from 'react-native';

const ButtonEvent = (props) => {
    return (

        <TouchableOpacity
            style={styles.button}
            onPress={() => props.problemSelected()}
        >
            <View style={styles.view}>
                <Image
                    source={props.icon}
                    style={styles.imageIcon}
                />
                <Text style={styles.textButton}>{props.name}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({

    view: {
        alignContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#137D7D',
        paddingVertical: 20,
        width: '40%',
        borderRadius: 4,
        margin: 10,
        justifyContent: 'center',
        alignContent: 'center',
    },
    textButton: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    imageIcon: {
        width: 50,
        height: 50,
    }

});

export default ButtonEvent;