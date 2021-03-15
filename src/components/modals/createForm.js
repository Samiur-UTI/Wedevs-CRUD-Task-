import React from 'react';
import {Grid} from '@material-ui/core';
import Form from '../form';
const FormCreate = (props) => {
    const {post, setPost} = props;
    return(
      <Grid container>
        <Form post={post} setPost={setPost}/>
      </Grid>
     );
}
export default FormCreate;