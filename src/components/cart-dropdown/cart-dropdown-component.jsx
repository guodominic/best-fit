import { useContext } from 'react'
import './cart-dropdown.styles.scss'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item-component'
import { CartContext } from '../../contexts/cart-context'
import { Link, useNavigate } from 'react-router-dom'



const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)
    const navigate = useNavigate();
    const toCheckoutHandler = () => {
        navigate('best-fit/checkout')
    }


    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items' >
                {cartItems.map(cartItem =>
                    <CartItem key={cartItem.id} cartItem={cartItem} />
                )}
            </div>
            {/* <Link to='best-fit/checkout'>
                <Button>GO TO CHECKOUT</Button>
            </Link> */}
            <Button onClick={toCheckoutHandler}>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown