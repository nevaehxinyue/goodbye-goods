import React from 'react';
import { Modal, StyleSheet } from 'react-native';
import AppText from './Text';
import * as Progress from 'react-native-progress';
import color from '../config/color';

function UploadScreen({ progress = 0, visible = false}) {
    return (
        <Modal visible={visible} style={styles.container}>
            <Progress.Bar progress={progress} color={color.primary} width={200} /> 
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    }
});

export default UploadScreen;