import { ReactComponent as Decrease } from './minus.svg'
import { ReactComponent as Increase } from './plus.svg'
import { ReactComponent as Remove } from './cross.svg'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart-context'
import Button from '../../components/button/button.component'


const Checkout = () => {
    const { cartItems, totalPrice } = useContext(CartContext)

    const cartItemsToCheckout = cartItems.map(cartItem => {
        const { name, quantity, price, imageUrl } = cartItem;
        return (<div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '30px' }}>
            <img alt={`${name}`} src={imageUrl} />
            <h2>{name}</h2>
            <div style={{ display: 'flex' }}>
                <Decrease style={{ cursor: 'pointer' }} onClick={() => handleRemove} />
                <h2 style={{ marginBottom: '20px' }}>{quantity}</h2>
                <Increase style={{ cursor: 'pointer' }} onClick={() => handleRemove} />
            </div>
            <h2>{price}</h2>
            <Remove style={{ cursor: 'pointer' }} onClick={() => handleRemove} />
        </div>)
    })
    const handleRemove = () => {

    }
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