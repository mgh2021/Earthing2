import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Router from './src/navigation/Router';

function App(){
  return (
    <>
      <StatusBar style="dark-content" />
      <Router/>

    </>
  );
};
export default App;

