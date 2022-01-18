import React from 'react';
import Item from './Item'
import { observer, inject } from 'mobx-react'
const Market = inject("Inventory")(
    observer((props) => {
        let name = ""
        let price = 0
        let quantity = 1
        const { Inventory } = props;
        const addItem = function () {
            Inventory.addItem(name, price, quantity)
        }
        const nameChange = function (e) {
            name = e.target.value
        }
        const priceChange = function (e) {
            price = e.target.value
        }
        const quantityChange = function (e) {
            quantity = e.target.value
        }

        return (
            <div className="Market">
                <input type='text' placeholder='name' onChange={nameChange} />
                <input type='number' placeholder='price' onChange={priceChange} />
                <input type="number" placeholder='quantity' onChange={quantityChange} />
                <button onClick={addItem}>Add</button>
                {Inventory.items.map((item) => (
                    <Item key={item.name} item={item} />
                ))}
            </div>
        );
    })
);

export default Market