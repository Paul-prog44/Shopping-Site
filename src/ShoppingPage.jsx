import NavigationBar from "./components/navigationBar/NavigationBar"
import { useContext, useEffect, useState } from "react"
import ObjectCard from "./components/objectCard/ObjectCard"
import CartContext from './CartContext'


function ShoppingPage() {

    const { cart, setCart } = useContext(CartContext)
    const [products, setProducts] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)



    useEffect(() => {
        const fetchObjectsFromApi = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products')
                if (!response.ok) {
                    throw new Error(`HTTP error: Status ${response.status}`)
                }
                let postsData = await response.json()
                setProducts(postsData)
                setError(null)    
            } catch (err) {
                setError(err.message)
                setProducts(null)
            } finally {
                setLoading(false)
            }
        }

        fetchObjectsFromApi()
    }, [])


    const addProduct = (newProduct) => {
        setCart([...cart, newProduct])
    }


    return (
        <>
            <NavigationBar/>
            <h1>Shopping page</h1>
            {loading && <p>Veuillez patientez</p>}   
            {error && <p>Une erreur est survenue, merci de réessayer</p>}         
            {/* TODO Faire une carte pour chaque objet */}
            <div style={{display:"flex", flexWrap: "wrap"}}>
            {products && (products.map(product =>
                <ObjectCard key={product.id} product={product} addProduct={addProduct}/>
            ))}
            </div>
        </>
    )
}

export default ShoppingPage