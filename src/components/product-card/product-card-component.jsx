import { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CartContext } from '../../contexts/cart-context'
import './product-card-style.scss'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'

const ProductCard = ({ product }) => {
    const { addItemToCart } = useContext(CartContext)
    const navigate = useNavigate();
    //const { category } = useParams();
    const { name, price, imageUrl } = product;
    const goToProduct = () => {
        navigate(`${product.id}`)
    }


    return (
        <div className='product-card-container'>
            <img
                alt={`${name}`}
                src={imageUrl}
                onClick={goToProduct}
            />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </div>
            <Button
                buttonType={BUTTON_TYPE_CLASSES.inverted}
                onClick={() => addItemToCart(product)}
            >ADD TO CART
            </Button>
        </div>
    )
}

export default ProductCard