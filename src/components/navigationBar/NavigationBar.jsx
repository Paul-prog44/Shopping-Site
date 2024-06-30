import { Link } from "react-router-dom";
import styles from "./navigationBar.module.css"
import logo from '../../assets/LogoShop.png'
import panier from '../../assets/panier.png'
import { useContext } from "react";
import CartContext from "../../CartContext";

const linkStyle = {
    margin:10
}

const divStyle = {
    display:"flex", 
    alignItems:'center'
}

function NavigationBar() {
    const { cart } = useContext(CartContext)

    let totalCartValue=0
    cart && cart.map((objectInCart) => {
        totalCartValue += objectInCart.price
    })

    return (
        <div className={styles.navbar}>
            <div style={divStyle}>
                <img src={logo} width={60}/>
                <Link to="/" style={linkStyle}>Homepage</Link>
                <Link to="/ShoppingPage">Shop</Link>
            </div>
            <div style={divStyle}>
                <img src={panier} style={{width:40}}/>
                <Link to="/shoppingcart">ShoppingCart</Link>
                <p>: {totalCartValue.toFixed(2)} €</p>
            </div>
        </div>
        
    )
}

export default NavigationBar