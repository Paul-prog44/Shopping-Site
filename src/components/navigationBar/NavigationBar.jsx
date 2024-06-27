import { Link } from "react-router-dom";
import styles from "./navigationBar.module.css"

function NavigationBar() {
    return (
        <div className={styles.navbar}>
            <div>
                <Link to="/">Homepage</Link>
                <Link to="/ShoppingPage">Shop</Link>
            </div>
            <div>
                <Link to="/shoppingcart">ShoppingCart</Link>
            </div>
        </div>
        
    )
}

export default NavigationBar