import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleLogo from "../../Assets/Image/google.svg";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/Firebase.init";

const provider = new GoogleAuthProvider();


const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  console.log(email);
  console.log(password);
  console.log(confirmPassword);

  const googleAuth = () => {

    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        navigate("/")
      }).catch((error) => {
        const errorMessage = error.message;
      });
  }

  const handleEmail = (emailInput) => {
    setEmail(emailInput);
  }
  const handlePassword = (passwordInput) => {
    setPassword(passwordInput);
  }
  const handleConfirmPassword = (conFirmPasswordInput) => {
    setConfirmPassword(conFirmPasswordInput);
  }

  const handleSignup = (event) => {
    event.preventDefault()
    const email = event.target.email.value;
    const password = event.target.password.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  return (
    <div className='auth-form-container '>
      <div className='auth-form'>
        <h1>Sign Up</h1>
        <form onSubmit={handleSignup}>
          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <div className='input-wrapper'>
              <input type='text' name='email' id='email' onBlur={(event)=>handleEmail(event.target.value)} />
            </div>
          </div>
          <div className='input-field'>
            <label htmlFor='password'>Password</label>
            <div className='input-wrapper'>
              <input type='password' name='password' id='password' onBlur={(event)=>handlePassword(event.target.value)} />
            </div>
          </div>
          <div className='input-field'>
            <label htmlFor='confirm-password'>Confirm Password</label>
            <div className='input-wrapper'>
              <input type='password' name='confirmPassword' id='confirm-password' onBlur={(event)=>handleConfirmPassword(event.target.value)} />
            </div>
          </div>
          <button type='submit' className='auth-form-submit'>
            Sign Up
          </button>
        </form>
        <p className='redirect'>
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </p>
        <div className='horizontal-divider'>
          <div className='line-left' />
          <p>or</p>
          <div className='line-right' />
        </div>
        <div className='input-wrapper'>
          <button className='google-auth' onClick={googleAuth}>
            <img src={GoogleLogo} alt='' />
            <p> Continue with Google </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
