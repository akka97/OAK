import Box from "@mui/material/Box";
import "./Homescreen.css";
import videoSrc from '../videos/gym.mp4';
import DropdownItemTagsExample from '../filtercity/Filtercity';
import '../filtercity/Filtercity.css';
import ShapeExample from '../gyms/Gyms';
import RateExample from '../gymrate/gymRate';
import Footer from '../footer/Footer';
import NavScrollExample from '../navbar/Navbar';
import LowerBody from "../lowerbody/Lowerbody";


    function Homescreen () {
        return (
        <>
        <div>
            <NavScrollExample />
        </div>
        <Box className="mainContainer" component="main" sx={{ p: 0 }}></Box>
        <div className="videoContainer">
                <video width="100%" className="video" autoPlay muted loop>
                    <source
                        src={videoSrc}
                        type="video/mp4"
                    />
                </video>
                </div>
        <div className='center-dropdown'>
            <DropdownItemTagsExample />
        </div>
        <div>
            <ShapeExample />
        </div>
        <div>
                <div className='element'>
            <RateExample />
                </div>
        </div>
        <div>
            <LowerBody />
        </div>
         
         <div>
            <Footer />
         </div>

        </>
        )
    }
    export default Homescreen;
