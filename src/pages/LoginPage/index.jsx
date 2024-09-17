import React from 'react';
import styles from './styles.module.css';
import loginImg from '../../../public/loginImg.svg';
import { IoAt, IoLockClosedOutline } from 'react-icons/io5';
import { FcGoogle } from 'react-icons/fc';
import Header from '../../components/Header';
function LoginPage() {
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginForm}>
        <Header>
          <p className={styles.lgn_hdr_txt}>Mailbox - communicate full-world</p>
        </Header>
        {/* <div>
          <header className={styles.header}>
            <p>Mailbox - communicate full-world</p>
          </header>
        </div> */}
        <div className={styles.formWrap}>
          <h3>Welcome to Mailbox</h3>

          <form>
            <div className={styles.inputContainer}>
              <i>
                <IoAt />
              </i>
              <input type='email' name='email' placeholder='Email' />
            </div>
            <div className={styles.inputContainer}>
              <i>
                <IoLockClosedOutline />
              </i>
              <input type='password' placeholder='Password' name='password' />
            </div>

            <div className={styles.resetPwd}>
              <a href=''>Forgot password?</a>
            </div>

            <div className={styles.signInBtnWrap}>
              <button className={styles.signInBtn}>Sign in</button>
            </div>
          </form>
          <span>
            Don't have an account?
            <a href='' className={styles.registerSpan}>
              Register here
            </a>
          </span>

          <div className={styles.devider}>
            <b>or</b>
          </div>

          <div className={styles.gmailSignInBtn}>
            <button>
              <FcGoogle /> Sign in with google
            </button>
          </div>
        </div>
      </div>
      <div className={styles.loginRt}>
        <img src={loginImg} alt='' />
      </div>
    </div>
  );
}

export default LoginPage;
