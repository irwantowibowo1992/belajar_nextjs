import RegisterView from "@/views/auth/register";
import Link from "next/link"
import { useRouter } from "next/router"

const RegisterPage = () => {
    const {push} = useRouter();
    const handleLogin = () => {
        push('/auth/login');
    }
    return (
        <>
            <RegisterView />
        </>
    )
}

export default RegisterPage;