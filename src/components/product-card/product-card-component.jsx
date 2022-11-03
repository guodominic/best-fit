import { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CartContext } from '../../contexts/cart-context'
import './product-card-style.scss'
import Button from '../button/button.component'

const ProductCard = ({ product }) => {
    const { addItemToCart } = useContext(CartContext)
    const navigate = useNavigate();
    const { id } = useParams();

    const goToProduct = () => {

        navigate(id)
    }

    const { name, price, imageUrl } = product;
    return (
        <div className='product-card-container'>
            <img
                alt={`${name}`}
                src={imageUrl}
                onClick={goToProduct}
            />
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