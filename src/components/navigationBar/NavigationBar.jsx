import { Link } from "react-router-dom";
import styles from "./navigationBar.module.css"
import logo from '../../assets/LogoShop.png'
import panier from '../../assets/panier.png'

const linkStyle = {
    margin:10
}

const divStyle = {
    display:"flex", 
    alignItems:'center'
}

function NavigationBar({shoppingCart}) {
    let total = 0
    //On vérifie si shopping cart n'est pas null avant de mapper sur les élements qu'il contient
    shoppingCart && shoppingCart.map((product) => {
        total += product.price
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
                <p>Total {total.toFixed(2)} €</p>
            </div>
        </div>
        
    )
}

export default NavigationBar