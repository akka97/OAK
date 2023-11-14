// FilterCity.jsx

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './Filtercity.css';

function FilterCity(props) {

  const handleChange = (e) => {
    const value = e.target.value;

    let filteredCitty = props.gyms.filter((el, i) => {
      return el.zone === value;
    });
    props.setGymList(filteredCitty);
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
