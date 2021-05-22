import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import Header from 'components/header';
import HomePage from 'pages/home-page';
import ShopPage  from 'pages/shop-page';
import SignInAndSignUpPage from 'pages/sign-in-and-sign-up-page';
import CheckoutPage from 'pages/checkout-page';

import { currentUserSelector } from 'redux/user/selectors';
import { setCurrentUser } from 'redux/user/actions';

import { auth, createUserProfileDocument } from 'firebase/firebase.utils';
class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
  const { setCurrentUser }= this.props;

  this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
    const userRef = await createUserProfileDocument(userAuth);

    userRef.onSnapshot((snapShot) => {
          setCurrentUser({ 
      id: snapShot.id,
      ...snapShot.data(), 
          });
    })
      } else {
    setCurrentUser(userAuth);
      }
  });
  }

  componentWillUnmount() {
  this.unsubscribeFromAuth();
  }

  render() {
  return (
      <div>
    <Header />
    <Switch>
      <Route exact path="/" component={ HomePage } />
      <Route path="/shop" component={ ShopPage } />
      <Route
        exact path="/signin"
        render={ () => {
          return this.props.currentUser ? (
          <Redirect to="/" />
          ) : (
          <SignInAndSignUpPage />
          )
        } }
      />
      <Route exact path="/checkout" component={ CheckoutPage } />
    </Switch>
      </div>
  )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: currentUserSelector,
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
