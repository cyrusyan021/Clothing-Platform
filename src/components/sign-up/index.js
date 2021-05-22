import React from 'react';

import './index.scss';

import CustomButton from 'controls/button';
import { Input } from 'controls/form';

import { auth, createUserProfileDocument } from 'firebase/firebase.utils';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmedPassword: '',
      error: '',
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmedPassword } = this.state;

    if (password !== confirmedPassword) {
      this.setState({ error: 'password' });
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      
      await createUserProfileDocument(user, { displayName });
      
      this.setState({ 
        displayName: '',
        email: '',
        password: '',
        confirmedPassword: '',
        error: '',
             });
    } catch (error) {
      this.setState({ error: 'email' });
      console.log('error in creating user', error.message);
    }
  }

  render() {
    const { displayName, email, password, confirmedPassword, error } = this.state; 

    return (
      <div className="sign-up">
        <h2 className="title">I don't have an account</h2>
        <span>Sign up with your email and password.</span>

        <form onSubmit={this.handleSubmit}>
          <Input
            name="displayName"
            label="Display Name"
            type="text"
            handleChange={this.handleChange}
            value={displayName}
            required
          />

          <Input
            name="email"
            label="Email"
            type="email"
            handleChange={this.handleChange}
            value={email}
            required
            onFocus={() => {
              if (error === 'email') this.setState({ email: '' });
            }}
          />

          <Input
            name="password"
            label="Password"
            type="password"
            handleChange={this.handleChange}
            value={password}
            required
            onFocus={() => {
              if (error === 'password') this.setState({ password: '' });
            }}
          />

          <Input
            name="confirmedPassword"
            label="Confirmed Password"
            type="password"
            handleChange={this.handleChange}
            value={confirmedPassword}
            required
            onFocus={() => {
              if (error === 'password') this.setState({ confirmedPassword: '' });
            }}
          />

          {
            error !== '' ? 
            <span className="error-message">
              {
                error === 'password' ?
                "Passwords don't matched"
                :
                "Email has already been taken"
              }
            </span>
            :
            null
          }

          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp;