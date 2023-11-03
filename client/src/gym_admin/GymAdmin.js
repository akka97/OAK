import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Gyms from "./Gyms/Gyms";
import "./GymAdmin.css";


const GymAdmin = () => {
    return (
        <>
            <div style={{ display: "flex", height: "100vh" }}>
                <Sidebar className="app">
                    <Menu>
                        <MenuItem className="menu1">
                            <h2>Admin Panel</h2>
                        </MenuItem>
                        <SubMenu label="Gyms panel">
                            <MenuItem component={<Link to="/gyms" className="link" />}>Gyms</MenuItem>
                        </SubMenu>
                        <SubMenu label="Users">
                            <MenuItem>Users</MenuItem>
                        </SubMenu>
                        <MenuItem> Logout </MenuItem>
                    </Menu>
                </Sidebar>

                <section>
                    <Routes>
                        <Route path="/gyms" element={<Gyms />} />
                    </Routes>
                </section>

            </div>
        </>
    )
}
export default GymAdmin;