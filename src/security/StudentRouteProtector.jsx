import { Navigate } from "react-router-dom";

const StudentProtectedRoute = ({ children, redirectPath = '/login' }) => {
    //! Obtain login status from redux persist
    const isAllowed = false; //! Get login status from redux persist
    let user_role = 'parent'; //! Get the user role from redux persist
    let user_role_lower = user_role.toLocaleLowerCase();
    // let redirectPath = "/login";

    if (isAllowed && user_role_lower == 'parent') {
        return children;
    } else {
        return <Navigate to={redirectPath} replace />;
    }
};

export default StudentProtectedRoute;
