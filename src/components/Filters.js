import React from "react";

function Filters({ pets, setPets, filters, setFilters }) {
  function handleChangeType(event) {
    const selectedType = event.target.value
    setFilters({type: selectedType})
  }

  function handleFindClick() {
    if (filters.type === "all") {
      fetch("http://localhost:3001/pets")
      .then(resp => resp.json())
      .then(selectedPets => setPets(selectedPets))
    } else {
      fetch(`http://localhost:3001/pets?type=${filters.type}`)
      .then(resp => resp.json())
      .then(selectedPets => setPets(selectedPets))
    }
  }

  return (
    <div className="ui form">
      <h3>Animal type</h3>
      <div className="field">
        <select name="type" id="type" aria-label="type" onChange={handleChangeType}>
          <option value="all">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
          <option value="micropig">Micropigs</option>
        </select>
      </div>

      <div className="field">
        <button className="ui secondary button" onClick={handleFindClick}>Find pets</button>
      </div>
    </div>
  );
}

export default Filters;
