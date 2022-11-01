import { ReactComponent as Decrease } from './minus.svg'
import { ReactComponent as Increase } from './plus.svg'
import { ReactComponent as Remove } from './cross.svg'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart-context'


const Checkout = () => {
    const { cartItems, totalPrice, addItemToCart, minusItemToCart, removeItemFromCart } = useContext(CartContext)

    const cartItemsToCheckout = cartItems.map(cartItem => {
        const { id, name, quantity, price, imageUrl } = cartItem;
        return (
            <div key={id} style={{ display: 'flex', justifyContent: 'space-around', marginTop: '30px' }}>
                <img alt={`${name}`} src={imageUrl} />
                <h2>{name}</h2>
                <div style={{ display: 'flex' }}>
                    <Decrease style={{ cursor: 'pointer' }} onClick={() => minusItemToCart(cartItem)} />
                    <h2 style={{ marginBottom: '20px' }}>{quantity}</h2>
                    <Increase style={{ cursor: 'pointer' }} onClick={() => addItemToCart(cartItem)} />
                </div>
                <h2>{price}</h2>
                <Remove style={{ cursor: 'pointer' }} onClick={() => removeItemFromCart(cartItem)} />
            </div>
        )
    })

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '30px' }}>
                <h2>Product</h2>
                <h2>Description</h2>
                <h2>Quantity</h2>
                <h2>Price</h2>
                <h2>Remove</h2>
            </div>
            <div >
                {cartItemsToCheckout}
            </div>
            <h1>total Price ${totalPrice}</h1>
        </div>
    )
}

export default Checkout