import { useAuth } from "../context/AuthContext";
import {Navigate} from "react-router-dom";
import type {ReactNode} from "react";

interface PrivateRouteProps {
    children: ReactNode;
}

export function PrivateRoute({ children }: PrivateRouteProps) {
    const { session, loading } = useAuth(); // your auth state

    if (loading) {
        return <div>Loading...</div>; // or spinner
    }

    if (session === undefined || session === null) {
        // User is not logged in → redirect to sign in
        return <Navigate to="/login" replace/>;
    }

    // User is logged in → render the requested page
    return children;
}