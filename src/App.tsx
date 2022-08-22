import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import CssBaseline from '@mui/material/CssBaseline'
import Button from '@mui/material/Button'

import MiniDrawer from './dashboard/PersistentDrawerLeft'
import DashboardContent from './dashboard/Dashboard'
import ControlledOpenSpeedDial from './dashboard/SpeedDial'

import Chart from './dashboard/Chart';

import Flow from './Flow';

import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import React, { FC } from 'react';

const style = {
  button1: {
    backgroundColor: '#db8e98',
    color: '#46653b'
  },
  button2: {
    backgroundColor: '#255a60',
    color: '#ccd47e'
  }
}

//const App = () => {
const App: React.FC = () => {
  //function App() {
  //<div className="App">

  return (

    <BrowserRouter>

      <CssBaseline />
      <MiniDrawer />

      <Routes>
        <Route path="/" element={<Chart />}>

        </Route>

        <Route path="/email" element={<Flow />}>

        </Route>
      </Routes>

      <ControlledOpenSpeedDial />;
    </BrowserRouter>


  );
}

//};

export default App
