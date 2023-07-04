import React, { useState } from 'react';
import { View, StyleSheet, Button, TextInput } from 'react-native';

const Form = ({ onPress, list, setList }) => {

    const [name, setName] = useState('');
    const [course, setCourse] = useState('');
    const [stream, setStream] = useState('');
    const [marks, setMarks] = useState(0);

    const handleChange = (enteredText, textArea) => {
        if (textArea === 'name') {
            setName(enteredText);
        } else if (textArea === 'course') {
            setCourse(enteredText)
        } else if (textArea === 'stream') {
            setStream(enteredText)
        } else {
            setMarks(enteredText)
        }
    }

    const addUser = () => {
        if ((name.length > 3 && course.length > 3) && (stream.length != 0 && marks > 10)) {
            const student = { id: list?.length + 1, name, course, stream, marks };
            setList((currentData) => [...currentData, student]);
        }
        onPress();
    }
    return (
        <View style={styles.formContainer}>
            <View style={styles.buttonContainer}>
                <Button title='close' onPress={onPress} />
            </View>
            <View style={styles.formArea}>
                <TextInput placeholder='student name' onChangeText={enteredText => handleChange(enteredText, 'name')} value={name} style={styles.input} />
                <TextInput placeholder='course' style={styles.input} onChangeText={enteredText => handleChange(enteredText, 'course')} value={course} />
                <TextInput placeholder='stream' style={styles.input} onChangeText={enteredText => handleChange(enteredText, 'stream')} value={stream} />
                <TextInput placeholder='aggerigates' style={styles.input} onChangeText={enteredText => handleChange(enteredText, 'marks')} value={marks} />
                <Button title='Add' onPress={addUser} />
            </View>

        </View>
    )
}

export default Form;

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        paddingTop: 100
    },
    buttonContainer: {
        flex: 1,

    },
    formArea: {
        flex: 3
    },
    input: {
        height: 40,
        margin: 12,
        width: 300,
        borderWidth: 1,
        padding: 10,
    },
})