import { Outlet, Link } from 'react-router-dom'
import { Fragment, useContext } from 'react'
import { ReactComponent as CrownLogo } from '../../Assets/crown.svg'
import './navigation-styles.scss'
import { UserContext } from '../../contexts/user-context'
import { signOutUser, deleteAccountUser } from '../../utils/firebase/firebase.utils.js'

const Navigation = () => {

    const { currentUser, setCurrentUser } = useContext(UserContext);
    const signOutHandler = async () => {
        await signOutUser();
        setCurrentUser(null);
    }
    const deleteAccountHandler = async () => {
        //await deleteAccountUser(currentUser.uid);
        await signOutUser();
        setCurrentUser(null);
    }
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/best-fit'>
                    <CrownLogo />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='best-fit/shop'>
                        SHOP
                    </Link>
                    <Link className='nav-link' to='best-fit/contact'>
                        CONTACT
                    </Link>
                    {currentUser ? (
                        <div style={{ display: 'flex' }}>
                            <span className='nav-link' onClick={signOutHandler}
                            >
                                SIGN OUT</span>
                            <span className='nav-link' onClick={deleteAccountHandler} >DELETE ACCOUNT</span>
                        </div>
                    ) : (
                        <Link
                            className='nav-link'
                            to='best-fit/auth'>
                            SIGN IN
                        </Link>
                    )
                    }
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation