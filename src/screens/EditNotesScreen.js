import React from 'react';
import { View, StyleSheet } from 'react-native';
import NoteFormComponent from '../components/NoteFormComponent';
import { NotesContext } from '../context/NoteContext';

const EditNoteScreen = ({ route, navigation}) => {
  const notesContext = React.useContext(NotesContext);

  return(
    <View>
      <NoteFormComponent 
        nav={navigation}
        method={"edit"}
        note={route.params.note}
        onFormSubmit={
          (i, t, c) => notesContext.dispatch({ type: "edit", note: { id: i, title: t, content: c } })
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({});

export default EditNoteScreen;