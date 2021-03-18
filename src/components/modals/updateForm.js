import {useState,React,useEffect} from 'react';
import {TextField,FormControl,Button, MenuItem} from '@material-ui/core';
import {useForm, Controller} from 'react-hook-form';
import Modal from 'react-modal';
import {useHistory,useParams} from 'react-router-dom';
import {findByIdAndRead,findByIdAndUpdate} from '../control/helpers';
import {FormCreateCategory} from '../modals/createForm';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
export default function UpdateBook({post, setPost, category,setCategory} ) {
    const [updateBook, setupdateBook] = useState(true);
    const {id} = useParams();
    const obj = findByIdAndRead(post,id);
    const history = useHistory();
    const {handleSubmit, control} = useForm();
    const onSubmit = async data => {
        const newData = findByIdAndUpdate(post,processedData(data,obj));
        await setPost([...newData]);
        setupdateBook(false);
    };
    function processedData(data,previousPost){
      let temp = previousPost.category;
      temp.push(data.category);
      data.category = temp;
      return data;
    }
    return (
      <Router>
            <Modal isOpen={updateBook} onRequestClose = {() => history.goBack()}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl>
                  <Controller
                    name='author'
                    as={<TextField id="name" variant='outlined' label="Author" />}
                    control={control}
                    defaultValue={obj.author}
                  />
                  <Controller
                    name="title"
                    as={<TextField id='title' variant='outlined' label="Title" />}
                    control={control}
                    defaultValue={obj.title}
                  />
                  <Controller
                    name="body"
                    as={<TextField id="body" variant='outlined' label="body" />}
                    control={control}
                    defaultValue={obj.body}
                  />
                  <Controller
                    name="id"
                    as={<TextField id="id" variant='outlined' label="id" type='number' />}
                    control={control}
                    defaultValue={obj.id}
                  />
                  <Controller
                    name="category"
                    as={
                      <TextField id="category" label="Category" select>
                        <Link to='/createcat'><Button variant='outlined' color='primary' type="action">Create new?</Button></Link>
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
              <div>
                  <Switch>
                      <Route exact path='/createcat' render={(props) => <FormCreateCategory {...props} category={category} setCategory={setCategory}/> }/>
                  </Switch>
              </div>
            </form>
        </Modal>
      </Router>
    )
}
