import {useState} from 'react';

export function useForm(initialVal){
    const [values, setValues] = useState(initialVal);
    const handleInputChange = (e) => {
        const {name,value} = e.target;
        setValues({
          ...values,
          [name]:value
        });
      }
    return{
        values,
        setValues,
        handleInputChange
        
    };
    
    
}
export function Form(props) {
  const {children,...other} = props;
  return (
    <form autoComplete='off' {...other}>
        {props.children}
    </form>
  )
}
