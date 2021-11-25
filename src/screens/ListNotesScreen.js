import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Octicons } from '@expo/vector-icons'; 
import { FlatList } from 'react-native-gesture-handler';
import { NotesContext } from '../context/NoteContext';
import ListNotesComponent from '../components/ListNotesComponent';


const ListNotesScreen = ({ navigation }) => {
    const context = React.useContext(NotesContext);

    return(
        <View>
            <View style={styles.container}>
                <Text style={styles.title}>
                    My Notes
                </Text>
                <Octicons 
                    name="plus" 
                    size={30} 
                    color="black"
                    onPress={ () => { navigation.navigate("New Note"); } }
                />
            </View>
            <FlatList 
                data={context.notes}
                renderItem={ ({ item }) => 
                    <ListNotesComponent 
                        nav={navigation} 
                        note={item}
                        deleteItem={(id) => context.dispatch({ type: "delete", id })}
                    /> 
                }
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        marginHorizontal: 15,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    }
});

export default ListNotesScreen;