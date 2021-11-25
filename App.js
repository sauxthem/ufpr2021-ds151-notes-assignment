import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListNotesScreen from './src/screens/ListNotesScreen';
import NewNoteScreen from './src/screens/NewNoteScreen';
import EditNotesScreen from './src/screens/EditNotesScreen';
import ViewNoteScreen from './src/screens/ViewNoteScreen';
import { NoteProvider } from './src/context/NoteContext';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NoteProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name=" " component={ListNotesScreen} />
          <Stack.Screen name="New Note" component={NewNoteScreen} />
          <Stack.Screen name="View Note" component={ViewNoteScreen} />
          <Stack.Screen name="Edit Note" component={EditNotesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NoteProvider>
  );
}

export default App;