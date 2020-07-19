import { Products } from './products';

export class ShoppingCartItem {   

    public titre: string;
    public price: number;

    constructor(public product: Products, 
                public quantity: number, 
                ){}

    get totalPrice(){
        return this.product.prix2 * this.quantity;
    }
}