import React from 'react';
import HeaderComponent from './header';
import './App.css';
import CampaignList from './CampaignList';
import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <CampaignList/>
    </div>
  );
}

export default App;
