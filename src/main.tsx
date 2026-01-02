import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {AppRoutes} from "./routes/AppRoutes.tsx";
import {AuthContextProvider} from "./context/AuthContext.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AuthContextProvider>
            <AppRoutes/>
        </AuthContextProvider>
    </StrictMode>
)
