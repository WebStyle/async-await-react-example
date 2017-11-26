import React, {Component} from 'react';
import Item from "./Item";

class List extends Component {

  render() {
    const listItems = this.props.list.map((item, index) =>
      <Item key={index} item={item}></Item>
    );
    return (
      <div>
        <h3>{this.props.title.toUpperCase()}</h3>
        <div>
        {listItems}
        </div>
      </div>
    );
  }
}

export default List;
