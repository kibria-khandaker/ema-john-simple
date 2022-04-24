import { useEffect, useState } from "react";
import { getStorCart } from "../utilities/fakedb";

const useCart = () => {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = getStorCart();
        const savedCart = [];

        const keys = Object.keys(storedCart)
        // console.log(keys);
        fetch('http://localhost:5000/productByKeys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(keys)
        })
            .then(res => res.json())
            .then(products => {
                console.log(products);
                for (const id in storedCart) {
                    const addedProduct = products.find(product => product._id === id);
                    if (addedProduct) {
                        const quantity = storedCart[id];
                        addedProduct.quantity = quantity;
                        savedCart.push(addedProduct);
                    }
                }
                setCart(savedCart);
            })
    }, [])
    return [cart, setCart];

}

export default useCart;
// 53-4 Create useCart with products dependency and use it : time 07.07