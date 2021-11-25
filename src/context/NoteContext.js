import React from 'react';

const NotesContext = React.createContext();

const noteReducer = (state, action) => {
  let newArr = [...state];

  switch (action.type) {
    case 'new':
      let id = 0;

      for (let i in state){
        if (state[i].id > id) id = state[i].id;
      }

      return [...state, {
        id: id+1,
        title: action.note.title,
        content: action.note.content
      }];
    case 'delete':
      newArr.splice(getNoteIndex(state, action.id), 1);
    
      return newArr;
    case 'edit':
      let i = getNoteIndex(state, action.note.id);

      newArr[i].title = action.note.title;
      newArr[i].content = action.note.content;

      return newArr;
    default:
      throw new Error();
  }
}

const getNoteIndex = (arr, id) => {
  return arr.findIndex(a => a.id === id)
}

const NoteProvider = ({ children }) => {
  const [notes, dispatch] = React.useReducer(noteReducer, []);

  return (
      <NotesContext.Provider value={{ notes, dispatch }}>
          {children}
      </NotesContext.Provider>
  )
}

export { NoteProvider, NotesContext };