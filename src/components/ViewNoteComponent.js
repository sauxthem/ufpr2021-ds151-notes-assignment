import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NoteFormComponent = ({ note }) => {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>
                    {note.title}
                </Text>
                <Text style={styles.paragraph}>
                    {note.content}
                </Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 5,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 20,
    },
    paragraph: {
        fontStyle: 'italic',
        fontSize: 16,
    }
});

export default NoteFormComponent;