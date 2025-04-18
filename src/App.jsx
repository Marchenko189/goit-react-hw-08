import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import Layout from "./components/Layout/Layout";
import RestrictedRoute from './components/RestrictedRoute';
import PrivateRoute from './components/PrivateRoute';
import { selectIsRefreshing } from "./redux/auth/selectors";
import { refreshUser } from "./redux/auth/operations";
import Loader from "./components/Loader/Loader";


export default function App() {
    const dispatch = useDispatch();
    const isRefreshing = useSelector(selectIsRefreshing);

    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);
  
    return isRefreshing ? (<Loader/>) : (
        <div>
        <Layout>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path="/register" element={<RestrictedRoute component={<RegistrationPage />} redirectTo='/contacts'/>} />
                <Route path="/login" element={<RestrictedRoute component={<LoginPage />} redirectTo='/contacts'/>} />
                <Route path="/contacts" element={<PrivateRoute component={<ContactsPage />} redirectTo='/login'/>} />
            </Routes>    
        </Layout>
    </div>
    )
}
