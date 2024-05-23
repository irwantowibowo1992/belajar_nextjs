import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const UserSettingPage = () => {
    const [isLogin, setIsLogin] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (!isLogin) {
            router.push('/auth/login');
        }
    }, []);
    return (
        <div>
            <div>
                <h1>User Setting Page</h1>
            </div>
        </div>
    )
}

export default UserSettingPage;