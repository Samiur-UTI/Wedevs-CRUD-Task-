import {React,useState,useEffect} from 'react';
import Form from '../form';
import {TextField,FormControl,Button, Grid} from '@material-ui/core';
import {useForm, Controller} from 'react-hook-form';
import Modal from 'react-modal';
import {useHistory} from 'react-router-dom';
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
  const [openForm, setopenForm] = useState(true)
  const history = useHistory();
  const onSubmit = async data => {
    await setCategory([...category,data.category]);
    setopenForm(false)
  };

  return(
    <Modal isOpen={openForm} onRequestClose = {() => history.goBack()}>
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
    </Modal>
  )    
}