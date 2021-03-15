import React, {useState, useEffect} from 'react';
import {Grid} from '@material-ui/core';
import Form from '../form';
const initialVal = {
  id:0,
  author:'',
  title:'',
  body:'',
  category:'',
  isPermanent: false
}
const FormCreate = (props) => {

    const {post, setPost} = props;
    return(
      <Grid container>
        <Form post={post} setPost={setPost}/>
      </Grid>
     );
}
export default FormCreate;