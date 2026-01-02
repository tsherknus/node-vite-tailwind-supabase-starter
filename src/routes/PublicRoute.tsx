import { useAuth } from "../context/AuthContext";
import {Navigate} from "react-router-dom";
import type {ReactNode} from "react";

interface PublicRouteProps {
    children: ReactNode;
}

export function PublicRoute({ children }: PublicRouteProps) {
    const { session, loading } = useAuth(); // your auth state

    if (loading) {
        return <div>Loading...</div>; // or spinner
    }

    if (session) {
        // User is logged in → redirect to achievements
        return <Navigate to="/dashboard" replace/>;
    }

    // User is logged in → render the requested page
    return children;
}