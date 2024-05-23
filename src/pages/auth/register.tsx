import Link from "next/link"
import { useRouter } from "next/router"

const RegisterPage = () => {
    const {push} = useRouter();
    const handleLogin = () => {
        push('/auth/login');
    }
    return (
        <div>
            <div>Register Page</div>
            <button onClick={() => handleLogin()}>Login</button>
            <p>
                Sudah punya akun? <Link href={"/auth/login"}>Login</Link>
            </p>
        </div>
    )
}

export default RegisterPage;