import { Outlet, Link } from 'react-router-dom'
import { Fragment, useContext } from 'react'
import { ReactComponent as CrownLogo } from '../../Assets/crown.svg'
import './navigation-styles.scss'
import { UserContext } from '../../contexts/user-context'

const Navigation = () => {

    const { currentUser } = useContext(UserContext);
    console.log(currentUser);
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrownLogo />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    <Link className='nav-link' to='/contact'>
                        CONTACT
                    </Link>
                    <Link className='nav-link' to='/auth'>
                        SIGN IN
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation