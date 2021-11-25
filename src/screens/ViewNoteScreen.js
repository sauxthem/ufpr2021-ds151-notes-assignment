import React from 'react';
import { View, StyleSheet } from 'react-native';
import ViewNoteComponent from '../components/ViewNoteComponent';

const ViewNoteScreen = ({ route, navigation }) => {
  return(
    <View>
      <ViewNoteComponent 
        nav={navigation} 
        note={route.params.note}
        method={"view"}
      />
    </View>
  )
}

const styles = StyleSheet.create({});

export default ViewNoteScreen;