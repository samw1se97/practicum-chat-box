import React, { useState } from 'react';
import styles from './styles.module.css';
import loginImg from '../../../public/loginImg.svg';
import { IoAt, IoLockClosedOutline } from 'react-icons/io5';
import { FcGoogle } from 'react-icons/fc';
import { MdAlternateEmail, MdOutlineLock } from 'react-icons/md';
import Header from '../../components/Header';
import LogRegForm from '../../components/LogRegForm';

function LoginPage() {
  const [userExists, setUserExists] = useState(true);
  const [forgotPwd, setForgotPwd] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginForm}>
        <Header>
          <p className={styles.lgn_hdr_txt}>Mailbox - communicate full-world</p>
        </Header>
        {!userExists ? ( // if user does not exist
          // ## Register form ##
          <LogRegForm>
            <h3>Everything starts here</h3>
            <span>
              Enter your email address and we'll send you a link <br /> to reset
              your password
            </span>
            <div className={styles.inptWrapper}>
              <input
                type='email'
                value={email}
                placeholder='Email Address'
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.inptWrapper}>
              <input
                type='text'
                value={email}
                placeholder='First Name'
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.inptWrapper}>
              <input
                type='text'
                value={email}
                placeholder='Last Name'
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.inptWrapper}>
              <input
                type='password'
                value={email}
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button className={styles.primaryBtn}>Register</button>
            <span style={{ alignSelf: 'flex-start' }}>
              Already have an account?
              <b onClick={() => setUserExists(true)}>Login here</b>
            </span>
            <span style={{ alignSelf: 'flex-start' }}>
              By registering you agree to aor
              <b>Terms of Use</b>
            </span>
          </LogRegForm>
        ) : forgotPwd ? ( // if user does exist but forgot his password
          //## Reset password form ##
          <LogRegForm>
            <h3>Reset Password</h3>
            <span>
              Enter your email address and we'll send you a link <br /> to reset
              your password
            </span>
            <div className={styles.inptWrapper}>
              <MdAlternateEmail />
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <small onClick={() => setForgotPwd(false)}>back to login</small>

            <button className={styles.primaryBtn}>Send reset link</button>
          </LogRegForm>
        ) : (
          <LogRegForm>
            {/* if user Exists  */}
            {/*  ## Login Form ##  */}
            <h3>Welcome to Mailbox</h3>
            <div className={styles.inptWrapper}>
              <MdAlternateEmail />
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email Address'
              />
            </div>
            <div className={styles.inptWrapper}>
              <MdOutlineLock />
              <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
              />
            </div>

            <small onClick={() => setForgotPwd(true)}>Forgot password?</small>

            <button className={styles.primaryBtn}>Sign in</button>

            <span>
              Don't have an account?
              <b onClick={() => setUserExists(false)}>Register here</b>
            </span>
            <b>or</b>
            <button className={styles.secondaryBtn}>
              <FcGoogle /> Sign in with google
            </button>
          </LogRegForm>
        )}
      </div>
      <div className={styles.loginRt}>
        <img src={'/loginImg.svg'} alt='' />
      </div>
    </div>
  );
}

export default LoginPage;
