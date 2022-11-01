import { ReactComponent as Decrease } from './minus.svg'
import { ReactComponent as Increase } from './plus.svg'
import { ReactComponent as Remove } from './cross.svg'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart-context'
import './checkout.styles.scss'
import './checkout-item.styles.scss'


const Checkout = () => {
    const { cartItems, totalPrice, addItemToCart, minusItemToCart, removeItemFromCart } = useContext(CartContext)

    const cartItemsToCheckout = cartItems.map(cartItem => {
        const { id, name, quantity, price, imageUrl } = cartItem;
        return (
            <div key={id} className='checkout-item-container'>
                <div className='image-container'>
                    <img alt={`${name}`} src={imageUrl} />
                </div>
                <span className='name'>{name}</span>

                <span className='quantity'>
                    <Decrease onClick={() => minusItemToCart(cartItem)} className='remove-button' />
                    <span className='value'>{quantity}</span>
                    <Increase onClick={() => addItemToCart(cartItem)} className='plus-button' />
                </span>

                <span className='price'>${price}</span>
                <Remove onClick={() => removeItemFromCart(cartItem)} className='remove-button' />
            </div>
        )
    })

    const checkoutHeaderArray = ['Product', 'Description', 'Quantity', 'Price', 'Remove'];
    const checkoutHeader = checkoutHeaderArray.map((headerItem) => {
        return (
            <div className='header-block'>
                <span>{headerItem}</span>
            </div>
        )
    })

    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                {checkoutHeader}
            </div>
            {cartItemsToCheckout}
            <span className='total'>Total Price ${totalPrice}</span>
        </div>
    )
}

export default Checkout