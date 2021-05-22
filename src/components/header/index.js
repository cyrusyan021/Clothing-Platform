import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './index.scss';

import CartDropdown from 'components/cart-dropdown';
import CartIcon from 'components/cart-icon';

import { cartHiddenSelector } from 'redux/cart/selectors';
import { currentUserSelector } from 'redux/user/selectors';

import { auth } from 'firebase/firebase.utils';

import { LogoIcon } from 'assets/icons';

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <LogoIcon />
      </Link>
      <div className="options-container">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        
        {
          currentUser ? (
            <div className="option" onClick={ () => auth.signOut() }>
              SIGN OUT
            </div>
          ) : (
            <Link className="option" to="/signin">
              SIGN IN
            </Link>
          )
        }
        <div className="option-icon">
          <CartIcon />
        </div>
      </div>
      { hidden ? null : <CartDropdown /> }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: currentUserSelector,
  hidden: cartHiddenSelector,
})

export default connect(mapStateToProps)(Header);