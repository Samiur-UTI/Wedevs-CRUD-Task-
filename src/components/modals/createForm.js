import React, {useState, useEffect} from 'react';
import { Grid, FormControl, TextField} from '@material-ui/core';

const initialVal = {
  id:0,
  author:'',
  title:'',
  body:'',
  category:'',
  isPermanent: false

}
const FormCreate = () => {
    const [initFormValue, setinitFormValue] = useState(initialVal);
    const handleInputChange = (e) => {
      const {name,value} = e.target;
      setinitFormValue({
        ...initFormValue,
        [name]:value
      });
    }
    return(
      <FormControl>
        <Grid container>
          <Grid item xs={8} sm={6} md={4}>
              <TextField label="Author Name" name='author' onChange={handleInputChange} variant="outlined" value={initFormValue.author}/>
          </Grid>
          <Grid item xs={8} sm={6} md={4}>
              <TextField label="Title" name='title' onChange={handleInputChange} variant="outlined" value={initFormValue.title}/>
          </Grid>
          <Grid item xs={8} sm={6} md={4}>
              <TextField label="body" name='body' onChange={handleInputChange} variant="outlined" value={initFormValue.body}/>
          </Grid>
          <Grid item xs={8} sm={6} md={4}>
              <TextField label="id" name='id' onChange={handleInputChange} variant="outlined" value={initFormValue.id}/>
          </Grid>
        </Grid>
      </FormControl>
    );
}
export default FormCreate;