import React from 'react'
import PRODUCTS from '../../shop-data.json'

const Shop = () => {
    return (
        <div>
            {PRODUCTS.map(({ id, name }) => (
                <div key={id}>
                    <h1>{name}</h1>
                </div>
            ))
            }
        </div>
    )
}

export default Shop