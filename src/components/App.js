import React, { useEffect, useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  useEffect(() => {
    fetch("http://localhost:3001/pets")
      .then((resp) => resp.json())
      .then((allPets) => {
        setPets(allPets)
      })
  }, [])

  function handleAdoption(updatedPet) {
    const updatedPets = pets.map((pet) => pet.id === updatedPet.id ? updatedPet : pet)
    setPets(updatedPets)
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters pets={pets} setPets={setPets} filters={filters} setFilters={setFilters} />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onPetAdoption={handleAdoption} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
