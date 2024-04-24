import { useNavigate, Outlet, useLocation } from "react-router-dom";
import HeaderComponent from "../Header/HeaderComponent";
import AppSidebar from "../AppSidebar/AppSidebar";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";

const HomeLayout = () => {
    const [showMenu, setShowMenu] = useState(false);
    // const browserHasKey = localStorage.getItem('user');
    let location = useLocation();
    const navigate = useNavigate()

    useEffect(() => {
        if (location?.pathname === '/') {
            navigate("/dashboard")
        }
    }, [location])


    return (
        < div>
            <Grid container display="flex" alignItems="center">
                <div style={{ display: "flex", width: "100%" }} >
                    <AppSidebar setShowMenu={setShowMenu} showMenu={showMenu} />
                    <div style={{ marginLeft: "32px" }}  >
                        <HeaderComponent setShowMenu={setShowMenu} showMenu={showMenu} />
                        <Outlet />
                    </div>
                </div>
            </Grid>
        </ div>

    );
};

export default HomeLayout;
