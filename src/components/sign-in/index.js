import React from 'react';

import './index.scss';

import CustomButton from 'controls/button';
import { Input } from 'controls/form';

import { auth, signInWithGoogle } from 'firebase/firebase.utils';

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      error: false,
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '', error: false });
    } catch (error) {
      this.setState({ error: true });
      console.log('error in signing in', error.message);
    }
  }

  render() {
    const { email, password, error } = this.state;

    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password.</span>

        <form onSubmit={this.handleSubmit}>
          <Input
            name="email"
            label="Email"
            type="email"
            handleChange={this.handleChange}
            value={email}
            required
          />

          <Input
            name="password"
            label="Password"
            type="password"
            handleChange={this.handleChange}
            value={password}
            required
            onFocus={() => {
              if (error) this.setState({ password: '' });
            }}
          />

          {
            error ? 
            <span className="error-message">
              Unregistered Email or Invalid Password
            </span>
            :
            null
          }

          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;