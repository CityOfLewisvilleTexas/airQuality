import React from 'react';
// import logo from './logo.svg';
import { Container } from './appStyles'
import AirQuality from './components/AirQuality';
import DiscussionText from './components/DiscussionText'
import WebFont from 'webfontloader'
import axios from 'axios'
import { serviceURL } from './utils';

const getEmailAddresses = () => {
  axios.post(`${serviceURL}HR/GET EmployeeEmails`)
    .then(response => {
      console.log(response.data)
    })
}

WebFont.load({
    google: {
        families: ['Roboto Mono:300,400,600', 'sans-serif']
    }
})
function App() {
  return (
    <div className="App" onLoad={getEmailAddresses()}>
      <Container>
        <AirQuality />
        <DiscussionText />
      </Container>
    </div>
  );
}

export default App;
