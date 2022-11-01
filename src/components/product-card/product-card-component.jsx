import { useContext } from 'react'
import { CartContext } from '../../contexts/cart-context'
import './product-card-style.scss'
import Button from '../button/button.component'

const ProductCard = ({ product }) => {
    const { addItemToCart } = useContext(CartContext)

    const { name, price, imageUrl } = product;
    return (
        <div className='product-card-container'>
            <img alt={`${name}`} src={imageUrl} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button
                buttonType='inverted'
                onClick={() => addItemToCart(product)}
            >ADD TO CART
            </Button>
        </div>
    )
}

export default ProductCard