import './objectCard.css'

function ObjectCard({product, addProduct}) {
    const onButtonClick = () => {
        addProduct(product)
    }

    return (
        <div className="productCard">
        <img src={product.image} style={{width:150}}/>
        <p>{product.title}</p>
        <p>{product.price}€</p>
        <button
            type='button'
            onClick={onButtonClick}>
            Ajouter
        </button>
        </div>
    )
}

export default ObjectCard