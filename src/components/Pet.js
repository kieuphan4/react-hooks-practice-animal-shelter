import React from "react";

function Pet({ pet, onPetAdoption }) {
  const handleAdoptClick = () => {
    console.log(pet.id)
    fetch(`http://localhost:3001/pets/${pet.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isAdopted: true,
      }),
    })
    .then((resp) => resp.json())
    .then((updatedPet) => onPetAdoption(updatedPet))
  }

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {/*'♀' OR '♂' */
            pet.gender === "female" ? "♀" : "♂"
          }
          {pet.name}
        </span>
        <div className="meta">
          <span className="date">{pet.type}</span>
        </div>
        <div className="description">
          <p>Age: {pet.age}</p>
          <p>Weight: {pet.weight}</p>
        </div>
      </div>
      <div className="extra content">
        {pet.isAdopted ? <button className="ui disabled button">Already adopted</button> : <button className="ui primary button" onClick={handleAdoptClick}>Adopt pet</button>}
      </div>
    </div>
  );
}

export default Pet;
