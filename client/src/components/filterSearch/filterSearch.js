import TextField from '@mui/material/TextField';
import { useState } from 'react';
import db_data from '../../db/gyms';

const FilterSearch = (props) => {
    const [searchText, setSearchText] = useState('');

    const handleSearchChange = (event) => {
        const searchText = event.target.value.toLowerCase();

        const filteredGyms = db_data.filter(gym =>
            gym.name.toLowerCase().includes(searchText)
        );

        console.log(filteredGyms);

        props.setGyms(filteredGyms);


    };

    return (
        <>
            <TextField id="outlined-basic" className="search-input" label="Search Gyms...  " variant="outlined" onChange={handleSearchChange} />
        </>
    );
};

export default FilterSearch;
