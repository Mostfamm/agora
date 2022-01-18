import React from "react";
import { observer, inject } from "mobx-react";
const Item = inject("Inventory")(
  observer((props) => {
    const { Inventory, item } = props;

    const buy = function () {
      Inventory.buyItem(item.name);
    };
    return (
      <li className="item">
        
          {item.quantity} {item.name} available at ${item.price} per item
   
        <button onClick={buy}>Buy now</button>
      </li>
    );
  })
);

export default Item;
