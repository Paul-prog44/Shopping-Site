import { Link } from "react-router-dom"
import NavigationBar from "./components/navigationBar/NavigationBar"

function ShoppingPage() {
    return (
        <>
            <NavigationBar/>
            <h1>Shopping page</h1>
            <Link to="/">Back to homepage</Link>
        </>
    )
}

export default ShoppingPage