import { useContext } from "react"
import NavigationBar from "../navigationBar/NavigationBar"
import CartContext from "../../CartContext"


function ShoppingCart() {
    const { cart, setCart } = useContext(CartContext)

    let total = 0
    cart.map((objectInCart) => (
        total += objectInCart.price 
    ))

    console.log(cart)
    return (
        <>
            <NavigationBar/>
            <h1>Your Shopping cart</h1>
            {cart.length > 0 ? cart.map((product) => (
                <div style={{display:'flex', 
                            flexDirection:'row',
                            border: '1px solid black',
                            margin : 5
                            }}>
                    <img src={product.image} style={{width:100, margin: 20}}/>
                    <p style={{display:'flex', alignItems:"center"}}>{product.title} - {product.price}€</p>
                </div>
            )): <p>Votre panier est vide</p>}
            <h3>Le total de votre panier est de : {total.toFixed(2)}€</h3>
        </>
    )
}

export default ShoppingCart