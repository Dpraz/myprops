import React from 'react'
import SigninComponent from '../../Components/signin-component/SigninComponent'
import SignupComponent from '../../Components/signupcomponent/SignupComponent'

import './SigninSignupComponent.scss'
export default props => {
    return (
        <div className='sign-in-and-sign-up'>
            <SigninComponent />
            <SignupComponent />
        </div>
    )
}