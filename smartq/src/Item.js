import React, { Component } from 'react';
import './Categories.css';
import negative from './negative.png';
import plus from './plus.png';

class Item extends Component {
  render() {
    return (
      <div className="Item">
      <div className="itemid">
          <img align="left" src={negative} height="20px" width="20px"/>
        <label>5</label>&nbsp;&nbsp;
           <img align="right" src={plus} height="20px" width="20px"/>
        </div>
        </div>
    );
  }
}

export default Item;
