import React from 'react';

import './App.css';
import HeaderNavigation from '../src/Navigation/HeaderNavigation'
import SidebarNavigation from '../src/Navigation/SidebarNavigation'
import FooterNavigation from '../src/Navigation/FooterNavigation'

function App() {
  return (
    <div className="App">
   <HeaderNavigation></HeaderNavigation>
   <SidebarNavigation></SidebarNavigation>
   <FooterNavigation></FooterNavigation>
    </div>
  );
}

export default App;
