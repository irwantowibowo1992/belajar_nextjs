import Link from 'next/link';
import styles from './Login.module.css';

const LoginView = () => {
    return (
        <div className={styles.login}>
            <div>Login Page</div>
            <p>
                Belum punya akun? <Link href={"/auth/register"}><span style={{color: 'red', cursor: 'pointer'}}>Register</span></Link>
            </p>
        </div>
    )
}

export default LoginView;