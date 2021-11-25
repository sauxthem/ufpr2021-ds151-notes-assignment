import React from 'react';
import { View, StyleSheet } from 'react-native';
import NoteFormComponent from '../components/NoteFormComponent';
import { NotesContext } from '../context/NoteContext';

const NewNoteScreen = ({ navigation }) => {
  const notesContext = React.useContext(NotesContext);

  return(
    <View>
      <NoteFormComponent 
        nav={navigation}
        method={"new"}
        onFormSubmit={
          (t, c) => notesContext.dispatch({ type: "new", note: { title: t, content: c } })
        }
      />
      </View>
  )
}

const styles = StyleSheet.create({});

export default NewNoteScreen;