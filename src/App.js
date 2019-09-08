import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Homepage from './pages/homepage/Homepage'
import ShopPage from './pages/shoppage/ShopPage'
import Header from './Components/headers/Header'
import './App.css';
import SigninSignupPage from './pages/signin/SigninSignupPage';
import { auth, createUserProfileDocument } from './firebase/firebase-utils'

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {

        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          // this.setState({ currentUser: userAuth })
        });
      }

      this.setState({ currentUser: userAuth })
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SigninSignupPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
