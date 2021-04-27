//import React from 'react';
import React, { useState, useEffect } from "react";
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Footer2 from './Footer2';
import Button from './Button'

const App = () => {
  const [ pets, setPets ] = useState([]);

  const fetchPets = async () => {
    const apiUrl = 'https://koira-api.herokuapp.com/api/v1/dogs';
    const response = await fetch(apiUrl);
    const data = await response.json();
    setPets(data);
  }
  
  useEffect(() => {
    fetchPets()
  }, []);
  
  let index = 0;

  const handleClick = () => {
    index++;
  }

  return (
    <div className="App">
      <Header title='Nuuhkukuonot' />
      {pets.map((pet, i) =>
      <div key={i}>
      <Content title={pet.title} pic={pet.imageUrl} />
      </div>
      )}
      <Footer>
        <Button id="hrt" onClick={handleClick} icon={`heart`}/>
      </Footer>
      <Footer2>
      <Button id="bknhrt" onClick={handleClick} icon={`heart-broken`}/>
      </Footer2>
    </div>
  );
}

export default App;