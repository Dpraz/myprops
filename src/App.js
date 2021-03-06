import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Homepage from './pages/homepage/Homepage'
import ShopPage from './pages/shoppage/ShopPage'
import Header from './Components/headers/Header'
import './App.css';
import Footer from './Components/footer/Footer'
import Checkout from './pages/checkout/Checkout'
import SigninSignupPage from './pages/signin/SigninSignupPage';
import { auth, createUserProfileDocument } from './firebase/firebase-utils'
import { setCurrentUser } from './redux/user/userAction';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/userSelector'
import { createStructuredSelector } from 'reselect';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {

    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {

        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }

      setCurrentUser({ userAuth })
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
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SigninSignupPage} />
          {/* <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SigninSignupPage />)} /> */}
          <Route exact path='/checkout' component={Checkout} />
        </Switch>
        <Footer />
      </div>
    );
  }
};


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
