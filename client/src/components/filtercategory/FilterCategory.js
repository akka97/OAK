import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import './FilterCategory.css';
import { useState } from 'react';

function FilterCategory(props) {

    const [category, setCategory] = useState(0);

    const handleChange = (e) => {
        const value = e.target.value;
        let filteredCitty = props.gyms.filter((el, i) => {
            return el.category === value;
        });
        props.setGymList(filteredCitty);
    };

    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Filter by Category</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                onChange={handleChange}
            >
                <MenuItem value={1}>SPA</MenuItem>
                <MenuItem value={2}>Fitnes</MenuItem>
                <MenuItem value={3}>Gym</MenuItem>
            </Select>
        </FormControl>
    );
}

export default FilterCategory;