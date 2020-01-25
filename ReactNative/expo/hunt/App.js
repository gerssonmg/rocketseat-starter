import React from 'react';
import { StyleSheet, Text, View, YellowBox, StatusBar } from 'react-native';
import Routes from './src/routes';

YellowBox.ignoreWarnings([
    'Unrecognized WebSocket',
    'Remote debugger'
])

export default function App() {
    return (
        <>
            <StatusBar barstyle="ligth-content" backgroundColor="#7d40e7" />
            <Routes />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
