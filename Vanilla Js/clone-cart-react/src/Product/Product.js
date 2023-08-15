import React from "react"
import './Product.css'

function Product({image, title:productName, price, children}) {

    let title = 'product card'
    return(
        <div className="container">
            <h2>{title}</h2>
            <div className="card">
                <img src={image} alt="Product"/>
                <h1>{productName}</h1>
                <p className="price">${price}</p>
                <p className="about">iPhone 13 mini, the smallest member of the family, but powerful</p>
                {children}
                <button>Add to Card</button>
            </div>
        </div>
    )
}

export default Product

Product.defaultProps = {
    image: 'logo192.png'
}