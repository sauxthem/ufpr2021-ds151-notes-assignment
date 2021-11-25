import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native-gesture-handler';

const ListNotesComponent = ({ note, nav, deleteItem }) => {

    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity 
                    onPress={() => {
                        nav.navigate("View Note", {
                            note 
                        });
                    }} 
                >
                    <Text style={styles.title}>
                        {note.title}
                    </Text>
                </TouchableOpacity>
                <View style={styles.iconView}>
                    <MaterialCommunityIcons 
                        name="pencil" 
                        size={28} 
                        color="black"
                        onPress={() => nav.navigate("Edit Note", { note })}
                    />
                    <Ionicons 
                        name="remove-circle" 
                        size={28} 
                        color="black" 
                        onPress={() => deleteItem(note.id)}
                    />
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    iconView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        flex: 4
    }
});

export default ListNotesComponent;