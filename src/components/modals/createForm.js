import React from 'react';
import Form from '../form';
import {TextField,FormControl,Button, Grid} from '@material-ui/core';
import {useForm, Controller} from 'react-hook-form';

export const FormCreateBook = (props) => {
    const {post, setPost,category} = props;
    return(
      <Grid container>
        <Form post={post} setPost={setPost} category={category}/>
      </Grid>
     );
}
export const FormCreateCategory = ({category,setCategory}) => {
  const {handleSubmit, control} = useForm();
  const onSubmit = data => setCategory([...category,data.category]);
  console.log(category);
  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
          <Controller
            name="category"
            as={<TextField id="name" variant='outlined' label="Name" />}
            control={control}
          />
      </FormControl>
      <Button variant='outlined' color='primary' type="submit">Submit</Button>
    </form>
  )    
}