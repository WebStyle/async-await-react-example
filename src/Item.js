import React, {Component} from 'react';
import './Item.css';

class Item extends Component {
  render() {
    const list = Object.entries(this.props.item).map(([key, value]) => {
      return (
        <div key={key}><strong>{key}</strong> : {value.toString()}</div>
      );
    });

    return (
      <div className="item">
        {list}
      </div>
    );
  }
}

export default Item;
