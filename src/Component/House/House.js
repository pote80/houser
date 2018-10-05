import React from 'react';

const House = (props) => (
    <div> 
      <h2>{props.house.property_name}</h2>
      <h3>{props.house.address}</h3>
      <h3>{props.house.city}</h3>
      <h3>{props.house.what_state}</h3>
      <h3>{props.house.zip}</h3>
      <button>Delete</button>
  </div>
  );
  
  export default House;