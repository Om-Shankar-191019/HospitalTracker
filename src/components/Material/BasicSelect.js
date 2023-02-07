import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux'
import { putCategory } from '../../features/hospitalSlice';
import './BasicSelect.css'
export default function BasicSelect() {
    const dispatch = useDispatch();
  const [filterCategory, setFilterCategory] = React.useState('city');

  const handleChange = (event) => {
    setFilterCategory(event.target.value);
  };

  React.useEffect(() => {
    dispatch(putCategory(filterCategory));
    
  },[filterCategory])

  return (
    <Box sx={{ minWidth: 120 }} className="basicSelect-box">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filter Hospitals</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filterCategory}
          label="filterCategory"
          onChange={handleChange}
        >
          <MenuItem value="city" >City</MenuItem>
          <MenuItem value="district">District</MenuItem>
          <MenuItem value="state">State</MenuItem>
          <MenuItem value="radius">Radius</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}