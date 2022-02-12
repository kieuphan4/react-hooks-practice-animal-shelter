import React from "react";

import Pet from "./Pet";

function PetBrowser({ pets, onPetAdoption }) {
  return <div className="ui cards">{
    pets.map((pet) => <Pet key={pet.id} pet={pet} onPetAdoption={onPetAdoption} />)
    }</div>;
}

export default PetBrowser;