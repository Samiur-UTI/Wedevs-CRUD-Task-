import React from 'react';
import {FormControl, InputLabel, Select,MenuItem} from '@material-ui/core';

export default function Dropdown(props) {
    const {post,handleInputChange} = props;
    console.log(post);
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
                    {/* <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem> */}
                    <MenuItem>Create New category</MenuItem>
                    {post.map( p => 
                         <MenuItem value={p.category}>{p.category}</MenuItem>)  }
            </Select>
        </FormControl>
        
    )
}
