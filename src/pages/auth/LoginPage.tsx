import {Link, useNavigate} from "react-router-dom";
import {type FormEvent, useState} from "react";
import {useAuth} from "../../context/AuthContext.tsx";

function LoginPage() {
    const { signIn } = useAuth()
    const navigate = useNavigate()

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false);
    const [signInError, setSignInError] = useState<string | null>(null);

    const handleLogin = async (e: FormEvent) => {
        try {
            e.preventDefault()
            setLoading(true);
            // @ts-ignore
            const {error} = await signIn(email, password)
            setLoading(false);

            if (error) throw error;

            navigate("/achievements")
        } catch (err) {
            if (err instanceof Error) {
                setSignInError(err.message)
            } else {
                setSignInError("An unexpected error occurred")
            }
        }
    }

    return (
        <div className="flex flex-col justify-center m-10">
            <form onSubmit={handleLogin}>
                <h2 className="font-bold pb-2">Login</h2>
                <p>Need to create an account? <Link to="/register">Sign Up</Link></p>
                {signInError && <div><p>There was a problem signing in:</p><p>{signInError}</p></div>}
                <div className="flex flex-col py-4">
                    <input className="p-3 mt-2 bg-[#525050] rounded" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input className="p-3 mt-2 bg-[#525050] rounded" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className="w-full mt-4" type="submit" disabled={loading}>Sign In</button>
                </div>
            </form>
        </div>
    )
}

export default LoginPage;