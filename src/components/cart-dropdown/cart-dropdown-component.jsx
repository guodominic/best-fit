import { useContext } from 'react'
import {
    CartDropDownContainer,
    CartItems,
    EmptyMessage
} from './cart-dropdown.styles.jsx'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item-component'
import { CartContext } from '../../contexts/cart-context'
import { Link, useNavigate } from 'react-router-dom'



const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)
    const navigate = useNavigate();
    const toCheckoutHandler = () => {
        navigate('checkout')
    }


    return (
        <CartDropDownContainer>
            <CartItems>
                {cartItems.length ? (
                    cartItems.map(cartItem =>
                        <CartItem key={cartItem.id} cartItem={cartItem} />
                    ))
                    : (
                        <EmptyMessage>Your cart is empty</EmptyMessage>
                    )
                }
            </CartItems>
            <Button onClick={toCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartDropDownContainer>
    )
}

export default CartDropdown