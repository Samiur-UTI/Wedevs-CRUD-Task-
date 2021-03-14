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
const FormCreate = () => {
    const {values, setvalue, handleInputChange}  = useForm(initialVal);
    
    return(
      <Input values={values} handleInputChange={handleInputChange}/>
     );
}
export default FormCreate;