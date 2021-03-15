import React, {useState, useEffect} from 'react';
import {useForm} from '../form';
import Input from "../control/input";

const initialVal = {
  id:0,
  author:'',
  title:'',
  body:'',
  category:'',
  isPermanent: false

}
const FormCreate = (props) => {
    // const validate = () =>{
    //   const temp = {};
    //   temp.author = values.author ? '' : 'Author Name Cannot be empty';
    //   temp.title = values.title ? '' : 'Must give a title';
    //   temp.id = values.id ? '' : 'This field is required';
    // }
    const {values, setvalue, handleInputChange}  = useForm(initialVal);
    const {post} = props;
    return(
      <div className='ui form'>
          <Input post={post} values={values} handleInputChange={handleInputChange}/>
      </div>
     );
}
export default FormCreate;