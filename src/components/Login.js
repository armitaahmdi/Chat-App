// Icons
import google from '../assets/google.svg';

// Style
import styles from './Login.module.css';
 
const Login = () => {
    return (
        <div className={styles.loginPage}>
            <div className={styles.loginCard}>
                <h2>Wellcome to ArmiGram!</h2>
                <div className={styles.button}>
                    <img src={google} alt='google' /> Sign in with Google
                </div>
            </div>
        </div>
    );
};

export default Login;