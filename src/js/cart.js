export const addToCart = (event) => {
    const productId = parseInt(event.target.dataset.id, 10);

    const existingCart = JSON.parse(localStorage.getItem("cart"));
    if(existingCart) {
        const existingProduct = existingCart.find(
            (cartProduct) => cartProduct.productId === productId
          );
         if (existingProduct){
            const newCart = existingCart.map((product) => {
                if(product.productId === productId) {
            alert("a")
                    return{
                        ...product,
                        amount: product.amount + 1,
                    };
                }
                return product
            })
            
    const cartString = JSON.stringify(newCart);
    localStorage.setItem( "cart", cartString);
         } else{
            alert(existingProduct)
            const newCart = [...existingCart, {productId, amount: 1}]
            
    const cartString = JSON.stringify(newCart);
    localStorage.setItem( "cart", cartString);
         }
    } else {
        const newCart = [
            {productId, amount: 1}
            
        ]
    const cartString = JSON.stringify(newCart);
    localStorage.setItem( "cart", cartString);
    }
}