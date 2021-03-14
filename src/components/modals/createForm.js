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
    const {values, setvalue, handleInputChange}  = useForm(initialVal);
    const {post} = props;
    return(
      <div className='ui form'>
          <Input post={post} values={values} handleInputChange={handleInputChange}/>
      </div>
     );
}
export default FormCreate;