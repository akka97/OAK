// FilterCity.jsx

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './Filtercity.css';
import React, { useState } from 'react';

function FilterCity(props) {

  const [selectedZone, setSelectedZone] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;


    props.setGyms((prevState)=>{
      let filteredCitty = prevState.filter((el, i) => {
        return el.zone === value;
      });
      return [...filteredCitty];

    });
  };

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filter by zone</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Zone"
          onChange={handleChange}
        >
          <MenuItem value={1}>Liqeni</MenuItem>
          <MenuItem value={2}>Blloku</MenuItem>
          {/* Add more menu items for other zones as needed */}
        </Select>
      </FormControl>
    </Box>
  );
}

export default FilterCity;
