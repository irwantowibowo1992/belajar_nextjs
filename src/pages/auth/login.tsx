import Link from "next/link"

const LoginPage = () => {
    return (
        <div>
            <div>Login Page</div>
            <p>
                Belum punya akun? <Link href={"/auth/register"}>Register</Link>
            </p>
        </div>
    )
}

export default LoginPage;