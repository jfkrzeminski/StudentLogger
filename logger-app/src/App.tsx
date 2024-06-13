import React from 'react';
import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import { Provider } from "react-redux";
import NavBar from './components/NavBar/NavBar';
import store from './store';
import './App.css';
import CheckinInterface from './components/CheckinInterface/CheckinInterface';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <NavBar />
        <Routes>
          <Route path="/"         element={<Navigate to="/1101"/>}/>
          <Route path='/:classId' element={<CheckinInterface/>} />
          <Route path='/'         element={<Navigate to="/HallMonitor"/>}/>
          <Route path='/:classId' element={<Navigate to="/HallMonitor"/>}/>
        </Routes>
      </Provider>
    </HashRouter>
  );
};

export default App;
