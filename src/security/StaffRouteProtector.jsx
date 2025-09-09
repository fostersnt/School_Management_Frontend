import { Navigate } from "react-router-dom";

const StaffProtectedRoute = ({ children, redirectPath = '/login' }) => {
    //! Obtain login status from redux persist
    const isAllowed = false; //! Get login status from redux persist
    let user_role = 'staff'; //! Get the user role from redux persist
    let user_role_lower = user_role.toLocaleLowerCase();
    // let redirectPath = "/login";

    if (isAllowed && user_role_lower == 'staff') {
        return children;
    } else {
        return <Navigate to={redirectPath} replace />;
    }
};

export default StaffProtectedRoute;
