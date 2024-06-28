import './objectCard.css'

function ObjectCard({product}) {
    return (
        <div className="productCard">
        <img src={product.image} style={{width:150}}/>
        <p>{product.title}</p>
        <p>{product.price}€</p>
        </div>
    )
}

export default ObjectCard