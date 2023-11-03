import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";
import GymDataTable from "./GymDataTable/GymDataTable";

import "./Gyms.css";
const Gyms = () => {
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

                <div className="gym-section">
                    <Button variant="contained">
                        Create Gym<AddIcon></AddIcon>
                    </Button>


                    <div className="data-table-cont">
                        <GymDataTable />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Gyms;