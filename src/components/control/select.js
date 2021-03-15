import React from 'react';
import {FormControl, InputLabel, Select,MenuItem} from '@material-ui/core';

export default function Dropdown(props) {
    const {post,handleInputChange} = props;
    return (
    
        <FormControl variant="outlined">
            <InputLabel id="demo-simple-select-outlined-label"><em>Category</em></InputLabel>
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value=''
                onChange={handleInputChange}
                label="Category"
            >
                    <MenuItem>Create New category</MenuItem>
                    {post.map( p => 
                         <MenuItem key={p.id} value={p.category}>{p.category}</MenuItem>)  }
            </Select>
        </FormControl>
        
    )
}
