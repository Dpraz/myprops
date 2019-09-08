import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Homepage from './pages/homepage/Homepage'
import ShopPage from './pages/shoppage/ShopPage'
import Header from './Components/headers/Header'
import './App.css';
import SigninSignupPage from './pages/signin/SigninSignupPage';
import { auth, createUserProfileDocument } from './firebase/firebase-utils'
import { setCurrentUser } from './redux/user/userAction';
import { connect } from 'react-redux';

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
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SigninSignupPage />)} />
        </Switch>
      </div>
    );
  }
}


const mapDispachToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

export default connect(mapStateToProps, mapDispachToProps)(App);
