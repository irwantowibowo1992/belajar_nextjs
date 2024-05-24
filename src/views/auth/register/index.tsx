import Link from "next/link"
import { useRouter } from "next/router"

const RegisterView = () => {
    const {push} = useRouter();
    const handleLogin = () => {
        push('/auth/login');
    }
    return (
        <div style={
                {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh'
                }
            }
        >
            <div>Register Page</div>
            <button onClick={() => handleLogin()}>Login</button>
            <p>
                Sudah punya akun? <Link href={"/auth/login"}>Login</Link>
            </p>
        </div>
    )
}

export default RegisterView;