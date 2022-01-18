/* eslint-disable */
import { observable, action, makeObservable } from 'mobx'
import { Item } from './Item'


class Inventory {
    constructor() {
        this.items = []
        makeObservable(this, {
            items: observable,
            addItem: action,
            buyItem: action,
            changePrice: action
        })

    }
    addItem = (name, price = 0, quantity = 1) => {
        for (let item of this.items) {
            if (item.name == name) {
                item.quantity += quantity
                if (price > 0) {
                    item.price = price
                }
                return
            }
        }
        this.items.push(new Item(name, price, quantity))


    }

    buyItem = (name) => {
        for (let item in this.items) {
            if (this.items[item].name == name) {
                if (this.items[item].quantity > 1) {
                    this.items[item].quantity -= 1
                    return
                } else {
                    this.items = this.items.filter(item => item.name !== name)
                }
            }
        }
    }

    changePrice = (name, price) => {
        for (let item of this.items) {
            if (item.name == name) {
                item.price = price
                return
            }
        }
    }
}

export default new Inventory();