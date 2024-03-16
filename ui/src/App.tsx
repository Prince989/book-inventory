import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import DashboardMenu from './Components/DashboardMenu';
import { Provider } from 'react-redux';
import { store } from './lib/store';
import DashboardContainer from './Components/DashboardContainer';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <div className='lg:flex sm:block xs:block'>
        <DashboardMenu />
        <DashboardContainer />
      </div>
    </Provider>
  );
}

export default App;
