import { Outlet, Link } from 'react-router-dom'
import { Fragment, useContext } from 'react'
//import { ReactComponent as CrownLogo } from '../../Assets/crown.svg'
import CartIcon from '../../components/cart-icon/cart-icon-component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown-component'
import { UserContext } from '../../contexts/user-context'
import { CartContext } from '../../contexts/cart-context'
import { signOutUser, deleteAccountUser } from '../../utils/firebase/firebase.utils.js'
import { NavigationContainer, NavLink, NavLinks, LogoContainer, ImgContainer } from './navigation-styles'

const Navigation = () => {

    const { currentUser, setCurrentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);
    //onAuthStateChanged, the centralized state linstener can listen to the state change of authentication
    /*     const signOutHandler = async () => {
            await signOutUser();
            setCurrentUser(null);
        } */
    const deleteAccountHandler = async () => {
        //await deleteAccountUser(currentUser.uid);
        await signOutUser();
        setCurrentUser(null);
    }
    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/best-fit'>
                    {/* <CrownLogo /> */}
                    <ImgContainer alt='logo'
                        src='https://media.istockphoto.com/vectors/pram-for-dolls-line-icon-kids-toys-concept-toy-baby-carriage-sign-on-vector-id1255830527?k=20&m=1255830527&s=612x612&w=0&h=xfoPf53CstU2vvVbTZqyALYKRSN4TNwLW-Wm0Sq3DJs=' />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='shop'>
                        SHOP
                    </NavLink>
                    <NavLink to='contact'>
                        CONTACT
                    </NavLink>
                    {currentUser ? (
                        <div style={{ display: 'flex' }}>
                            <NavLink as='span' onClick={signOutUser}
                            >
                                SIGN OUT</NavLink>
                            <span className='nav-link' onClick={signOutUser} >DELETE ACCOUNT</span>
                        </div>
                    ) : (
                        <NavLink
                            to='auth'>
                            SIGN IN
                        </NavLink>
                    )}
                    <CartIcon />
                </NavLinks>
                {/* short circuit operator */}
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation