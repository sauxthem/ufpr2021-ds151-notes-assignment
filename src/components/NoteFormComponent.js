import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const NoteFormComponent = ({ onFormSubmit, nav, note, method }) => {
    const [title, setTitle] = method === "edit" ? React.useState(note.title) : React.useState("");
    const [description, setDescription] = method === "edit" ? React.useState(note.content) : React.useState("");

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>
                    {method === "edit" ? "Editing note" : "Add a new Note"}
                </Text>
                <TextInput 
                    value={title}
                    placeholder="Note title"
                    fontSize={20}
                    onChangeText={(t) => {setTitle(t)}}
                    style={styles.input}
                    maxLength={30}
                />
                <TextInput 
                    value={description}
                    placeholder="Dear diary..."
                    place
                    fontSize={20}
                    onChangeText={(t) => {setDescription(t)}}
                    style={styles.input}
                    numberOfLines={8}
                    multiline={true}
                />
                <View style={styles.btnView}>
                    { method === "edit" 
                    ? <Button 
                        title="  Save changes  "
                        disabled={description.trim().length == 0 || title.trim().length == 0}
                        style={styles.button}
                        onPress={() => {
                            onFormSubmit(note.id, title, description);
                            nav.navigate(" ");
                        }}
                        color={"#1f67bf"}
                    /> 
                    : <Button 
                        title="  Confirm  "
                        disabled={description.trim().length == 0 || title.trim().length == 0}
                        style={styles.button}
                        onPress={() => {
                            onFormSubmit(title, description);
                            nav.navigate(" ");
                        }}
                        color={"#32ad2a"}
                    /> 
                    }
                </View>
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
        fontSize: 20,
        marginBottom: 20,
    },
    input: {
        margin: 5,
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'black',
        textAlignVertical: 'top'
    },
    button: {
        elevation: 1,
        margin: 5
    },
    btnView: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10
    }
});

export default NoteFormComponent;