import { useAuth } from "../pages/context/AuthContext"
import { Navigate } from "react-router-dom"


export default function PrivateRoute({ children }) {

    const { user } = useAuth()
    if (!user) {
        return <Navigate to="/auth/login" />
    }
    return children

}