import React from 'react';
import { colors } from './../constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { Button, View, Text, StyleSheet, FlatList } from 'react-native';

const List = ({ onPress, userData }) => {

    const item = ({ item }) => (
        <View style={{ flexDirection: 'row' }}>
            <View style={{ width: 40, borderWidth: 1 }}>
                <Text style={{ fontSize: 16, textAlign: 'center' }}>{item.id}</Text>
            </View>
            <View style={{ width: 90, borderWidth: 1 }}>
                <Text style={{ fontSize: 16, textAlign: 'center' }}>{item.name}</Text>
            </View>
            <View style={{ width: 80, borderWidth: 1 }}>
                <Text style={{ fontSize: 16, textAlign: 'center' }}>{item.course}</Text>
            </View>
            <View style={{ width: 80, borderWidth: 1 }}>
                <Text style={{ fontSize: 16, textAlign: 'center' }}>{item.stream}</Text>
            </View>
            <View style={{ width: 60, borderWidth: 1 }}>
                <Text style={{ fontSize: 16, textAlign: 'center' }}>{item.marks}</Text>
            </View>
        </View>
    )

    return (
        <LinearGradient colors={[`${colors.PrimaryColor}`, `${colors.SecondaryColor}`]} style={styles.backgroundGradient}>
            <View>
                <Button title="Add Student" onPress={onPress} />
            </View>
            <View style={styles.tableContainer}>
                <Text style={styles.tableName}>List of all Student</Text>
                <FlatList data={userData} renderItem={item} keyExtractor={item => item.name} />
            </View>
            <StatusBar style="auto" />
        </LinearGradient>
    )
}

export default List;

const styles = StyleSheet.create({
    backgroundGradient: {
        flex: 1,
        paddingTop: 100,
        alignItems: 'center',
        width: '100%'
    },
    buttonContainer: {
        flex: 1
    },
    tableContainer: { flex: 2, padding: 16, paddingTop: 30, width: '100%' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 },
    tableName: {
        fontWeight: 'bold',
        fontSize: 24,
        color: 'white',
        width: '100%',
        textAlign: 'center',
        paddingVertical: 4
    }
});