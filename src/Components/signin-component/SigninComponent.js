import React from 'react';
import FormInputComponent from '../forminputcomponent/FormInputComponent';
import CustomButtonComponent from '../custom-button/CustomButtonComponent';
import { auth, signInWithGoogle } from '../../firebase/firebase-utils';
import './SigninComponent.scss';

class SigninComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(
                email,
                password
            );
            this.setState({ email: '', password: '' })
        } catch (error) {
            console.error(error);
        }
    };

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInputComponent
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label='email'
                        required
                    />
                    <FormInputComponent
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='password'
                        required
                    />
                    <div className='button'>
                        <CustomButtonComponent type='submit'> Sign in </CustomButtonComponent>

                        <CustomButtonComponent onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with Google
                         </CustomButtonComponent>
                    </div>
                </form>
            </div>
        );
    }
}

export default SigninComponent;






// import React, { useState } from 'react'


// import FormInputComponent from '../forminputcomponent/FormInputComponent';
// import './SigninComponent.scss'
// import CustomButtonComponent from '../custom-button/CustomButtonComponent';
// import { signInwithGoogle } from '../../firebase/firebase-utils';

// export default props => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = event => {
//         event.preventDefault();
//         this.setState({ email: '', password: '' })
//     };
//     const handleChange = input => (event) => {
//         const { value, name } = event.target;
//         this.setState({ [name]: value })
//         // this.setState({ name: event.target.value })
//     };

//     // const handlePassword = (e) => {
//     //     setEmail(e.target.value);
//     // }
//     // const handleEmail = (e) => {
//     //     setPassword(e.target.value);
//     // }
//     return (
//         <div className='sign-in'>
//             <h2 className="title">I already have an account</h2>
//             <span className="title">Signin with your email & Password </span>
//             <form onSubmit={handleSubmit}>
//                 <FormInputComponent
//                     name="Email"
//                     type="email"
//                     value={email}
//                     handleChange={handleChange}
//                     label="email"
//                     required
//                 />

//                 <FormInputComponent
//                     // name="Password"
//                     type="password"
//                     value={password}
//                     onChange={handleChange}
//                     label='password'
//                     required
//                 />

//                 <div className="buttons">
//                     <CustomButtonComponent
//                         type="submit"
//                     >
//                         SIGNIN
//             </ CustomButtonComponent>
//                     <CustomButtonComponent
//                         onClick={signInwithGoogle} isGoogleSignIn>
//                         SIGNIN with Google
//             </ CustomButtonComponent>
//                 </div>

//             </form>
//         </div >


//     )
// }