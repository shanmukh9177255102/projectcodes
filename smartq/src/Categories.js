import React, { Component } from 'react';
import './Categories.css';
class Categories extends Component {
  render() {

    return (
      <div className="Categories">
      <ul className="cat-list">
         <li className="cat-item">Oriental</li>
         <li className="cat-item">Chinese Combos</li>
         <li className="cat-item">Chinese Starters</li>
         <li className="cat-item">Salads</li>
     </ul>
      </div>
    );
  }
}

export default Categories;
