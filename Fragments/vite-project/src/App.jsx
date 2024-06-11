import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

function App() {

  return (
    <React.Fragment>
      <h1>Healthy Food</h1>
      <ul className="list-group">
        <li className="list-group-item">Fish</li>
        <li className="list-group-item">Beets</li>
        <li className="list-group-item">Legumes</li>
        <li className="list-group-item">Almonds</li>
        <li className="list-group-item">Green Vegetables</li>
      </ul>
      ;
    </React.Fragment>
  );
}

export default App;
