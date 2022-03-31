import { useEffect, useState } from "react";
import { getStorCart } from "../utilities/fakedb";

const useCart =(products)=>{

    const [cart,setCart] = useState([]);

    useEffect(()=>{
        const storedCart = getStorCart();
        const savedCart = []
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    },[products])
    return [cart,setCart];
        
}

export default useCart;
// 53-4 Create useCart with products dependency and use it : time 07.07