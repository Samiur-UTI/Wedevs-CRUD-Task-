import React, {useState, useEffect} from 'react';
import {TextField,Grid,FormControl,Button, MenuItem} from '@material-ui/core';
import {useForm, Controller} from 'react-hook-form';
const initialVal = {
  id:0,
  author:'',
  title:'',
  body:'',
  category:'',
  isPermanent: false
}
const FormCreate = (props) => {
    const {handleSubmit, control} = useForm();
    const onSubmit = data => console.log(data);
    const {post} = props;
    // const validate = () =>{
    //   const temp = {};
    //   temp.author = values.author ? '' : 'Author Name Cannot be empty';
    //   temp.title = values.title ? '' : 'Must give a title';
    //   temp.id = values.id ? '' : 'This field is required';
    // }
    //const {values, setvalue, handleInputChange}  = useForm(initialVal);
    // {post} = props;
    return(
      <Grid container>
         <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
                <Controller
                  name="name"
                  as={<TextField id="name" variant='outlined' label="Name" />}
                  control={control}
                />
                <Controller
                  name="title"
                  as={<TextField id='title' variant='outlined' label="Title" />}
                  control={control}
                />
                <Controller
                  name="body"
                  as={<TextField id="body" variant='outlined' label="body" />}
                  control={control}
                />
                <Controller
                  name="id"
                  as={<TextField id="id" variant='outlined' label="id" type='number' />}
                  control={control}
                />
                <Controller
                  name="gender"
                  as={
                    <TextField id="gender" label="Category" select>
                      {post.map((option) => (
                        <MenuItem key={option.id} value={option.category}>
                          {option.category}
                        </MenuItem>
                      ))}
                    </TextField>
                  }
                  control={control}
                />

              <Button variant='outlined' color='primary' type="submit">Submit</Button>
            </FormControl>
        </form>
      </Grid>
     );
}
export default FormCreate;