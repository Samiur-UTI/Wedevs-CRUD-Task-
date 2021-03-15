import React, {useState, useEffect} from 'react';
import {TextField,Grid,Select} from '@material-ui/core';
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
    const {handleSubmit, control, register} = useForm();
    // const validate = () =>{
    //   const temp = {};
    //   temp.author = values.author ? '' : 'Author Name Cannot be empty';
    //   temp.title = values.title ? '' : 'Must give a title';
    //   temp.id = values.id ? '' : 'This field is required';
    // }
    //const {values, setvalue, handleInputChange}  = useForm(initialVal);
    // {post} = props;
    return(
      <div className='ui form'>
          <form onSubmit={handleSubmit(data => console.log(data))}>
            <Controller as={TextField} name="Author" control={control} defaultValue="" ref={register()} label='Author' type='text'/>
            <Controller as={TextField} name="Title" control={control} defaultValue="" ref={register()} label='Title' type='text'/>
            <Controller as={TextField} name="Body" control={control} defaultValue="" ref={register()} label='Body' type='text'/>
            <Controller as={TextField} name="Id" control={control} defaultValue="" ref={register()} label='id' type='number' />
            <select className="ui dropdown">
              <option value="">Gender</option>
              <option value="1">Male</option>
              <option value="0">Female</option>
            </select>
          </form>
      </div>
     );
}
export default FormCreate;