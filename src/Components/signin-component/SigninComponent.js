import React, { Component } from 'react'
import FormInputComponent from '../forminputcomponent/FormInputComponent';
import './SigninComponent.scss'
import CustomButtonComponent from '../custom-button/CustomButtonComponent';
import { signInwithGoogle } from '../../firebase/firebase-utils';

export default class SigninComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }
    handleSubmit = e => {
        e.preventDefault();
        this.setState({ email: '', password: '' })
    };
    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    };
    render() {

        return (
            <div className='sign-in'>
                <h2 className="title">I already have an account</h2>
                <span className="title">Signin with your email & Password </span>
                <form onSubmit={this.handleSubmit}>
                    <FormInputComponent name="Email"
                        type="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="email"
                        required
                    >
                    </FormInputComponent>

                    <FormInputComponent
                        name="Password"
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='password'
                        required
                    >
                    </FormInputComponent>
                    <div className="button">
                        <CustomButtonComponent
                            type="submit"
                        >
                            SIGNIN
                    </ CustomButtonComponent>
                        <CustomButtonComponent
                            onClick={signInwithGoogle} isGoogleSignIn>
                            SIGNIN with Google
                    </ CustomButtonComponent>
                    </div>

                </form>
            </div >
        )
    }
}
