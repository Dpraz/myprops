import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './Header.scss'
import { auth } from '../../firebase/firebase-utils';
import CardItem from '../card-item/CardItem'
import Cart from '../cart-component/Cart'
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cartSelector';
import { selectCurrentUser } from '../../redux/user/userSelector'

const Header = ({ currentUser, hidden, history }) => {
    return (
        <div className="header">
            <Link className="logo-continer" to="/">
                <Logo className='logo' />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/contact">MORE</Link>
                <CardItem />
                {currentUser ?
                    (<div className='option'
                        onClick={() => auth.signOut()}>
                        SIGN OUT
                  </div>)
                    : (
                        <Link className='option' to="/signin">
                            SIGNIN
                        </Link>)
                }
            </div>
            {
                hidden ? null : <Cart />
            }

        </div >
    );
}
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});
export default connect(mapStateToProps)(Header);