import { ShoppingCart } from './shopping-cart';

export class Order {
    datePlaced: number;
    items: any[];

    constructor(public userId: string, public shipping: any, shoppingCart: ShoppingCart){
        this.datePlaced = new Date().getTime();

        this.items = shoppingCart.items.map( i => {
            return {
              product:{
                // titre: i.titre,
                // price: i.price
                product : i.product
              },
              quantity: i.quantity,
              totalPrice: i.totalPrice
            }
          })
    }
}