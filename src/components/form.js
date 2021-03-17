import {TextField,FormControl,Button, MenuItem} from '@material-ui/core';
import {useForm, Controller} from 'react-hook-form';

export default function Form(props) {
  const {post, setPost, category} = props;
  const {handleSubmit, control} = useForm();
  const onSubmit = data => setPost([...post,processedData(data)]);
  function processedData(data){
    let temp = [];
    temp.push(data.category);
    data.category = temp;
    return data;
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
                <Controller
                  name='author'
                  as={<TextField id="name" variant='outlined' label="Author" />}
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
                      {category.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
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
