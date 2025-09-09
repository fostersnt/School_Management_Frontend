import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, redirectPath = '/login' }) => {
    //! Obtain login status from redux persist
    const isAllowed = true; //! Get login status from redux persist
    let user_role = 'staff'; //! Get the user role from redux persist
    const roles = ['admin', 'staff', 'parent'];
    let user_role_lower = user_role.toLocaleLowerCase();
    // let redirectPath = "/login";

    if (isAllowed && roles.includes(user_role_lower)) {
        return children;
    } else {
        return <Navigate to={redirectPath} replace />;
    }
};

export default ProtectedRoute;
