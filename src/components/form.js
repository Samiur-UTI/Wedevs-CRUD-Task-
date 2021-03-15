import {useState} from 'react';
import {TextField,FormControl,Button, MenuItem} from '@material-ui/core';
import {useForm, Controller} from 'react-hook-form';

export default function Form(props) {
  const {post, setPost} = props;
  const {handleSubmit, control} = useForm();
  const onSubmit = data => setPost([...post,data]);
  return (
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
                  name="category"
                  as={
                    <TextField id="category" label="Category" select>
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
  )
}
