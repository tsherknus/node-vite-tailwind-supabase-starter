import {useAuth} from "../context/AuthContext.tsx";
import {useNavigate, useLocation, Link } from "react-router-dom";
import { IoPerson } from "react-icons/io5";

function AppLayout({ children }: { children: React.ReactNode }) {
    const navigate = useNavigate()
    const location = useLocation()
    const {session, loading} = useAuth()

    return (
        <div className="min-h-screen flex flex-col items-center">
            <header className="w-full max-w-7xl px-4 py-3">
                <div className="flex justify-between items-center">
                    <div>
                        { !loading && (session ?
                            <div><Link to="/dashboard"><img className="h-12" src="/vite-tailwind-supabase-vercel-simple.svg"/></Link></div>:
                            <div><Link to="/"><img className="h-12" src="/vite-tailwind-supabase-vercel-simple.svg"/></Link></div>)
                        }
                    </div>
                    <div>
                        { !loading && (session ?
                            <div className="flex flex-row items-center">{location.pathname === "/" && <div><button className="mr-1" onClick={() => navigate("/dashboard")}>Dashboard</button></div>}<div className="p-2 bg-black rounded-full"><Link to="/profile"><IoPerson color="white" size={24}/></Link></div></div>:
                            <div>{location.pathname !== "/login" && <button onClick={() => navigate("/login")}>Login</button>}</div>)
                        }
                    </div>
                </div>
            </header>

            <main className="flex-1 mx-auto w-full max-w-7xl px-4 py-3">
                {children}
            </main>

            <footer className="w-full max-w-7xl px-4 py-3">
                <div className="flex flex-row justify-center items-center">
                    © 2025
                </div>
            </footer>
        </div>
    );
}
export default AppLayout;