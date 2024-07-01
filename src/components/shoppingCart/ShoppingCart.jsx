import { useContext } from "react"
import NavigationBar from "../navigationBar/NavigationBar"
import CartContext from "../../CartContext"
import './shoppingCart.css'


function ShoppingCart() {
    const { cart, setCart } = useContext(CartContext)

    let total = 0
    cart.map((objectInCart) => (
        total += objectInCart.price 
    ))

    const removeProduct= (uid) => {
        const updatedCart = cart.filter(product => product.uid !== uid)
        setCart(updatedCart)
    }

    // TODO : mettre une key unique (uuid), ajouter un bouton pour supprimer ou ajouter un des objets

    return (
        <>
            <NavigationBar/>
            <h1>Your Shopping cart</h1>
            {cart.length > 0 ? cart.map((product) => (
                <div key={product.uid} className="divCartList">
                    <img src={product.image} className="imgCart"/>
                    <p className="pCart">{product.title} - {product.price}€</p>
                    <button onClick={() => removeProduct(product.uid)}>Retirer</button>
                </div>
            )): <p>Votre panier est vide</p>}
            <h3>Le total de votre panier est de : {total.toFixed(2)}€<button className="payButton">Valider et payer</button>
            </h3>
        </>
    )
}

export default ShoppingCart