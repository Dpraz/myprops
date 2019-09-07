import React from 'react'
import './CustomButtonComponent.scss'

export default ({ children, isGoogleSignIn, ...otherProps }) => {
    return (
        <button
            className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
            {...otherProps} >
            {children}
        </button>
    )
}