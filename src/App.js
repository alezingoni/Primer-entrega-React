import './App.css';
import React from 'react';
import NavBar from '../src/components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/intemDetailContainer';

function App() {
  return (
    <> 
   <NavBar/>
   <ItemDetailContainer/>
    </>
  );
}

export default App;
