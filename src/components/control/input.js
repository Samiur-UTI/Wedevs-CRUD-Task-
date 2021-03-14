import { Grid, TextField} from '@material-ui/core';
import Dropdown from "../control/select";
import Button from "../control/button";
export default function Input (props){
    const {values, handleInputChange, post} = props;
    return(
        <Grid container>
            <Grid item xs={8} sm={6} md={4}>
                <TextField autoComplete='off' label="Author Name" name='author' onChange={handleInputChange} variant="outlined" value={values.author}/>
            </Grid>
            <Grid item xs={8} sm={6} md={4}>
                <TextField autoComplete='off' label="Title" name='title' onChange={handleInputChange} variant="outlined" value={values.title}/>
            </Grid>
            <Grid item xs={8} sm={6} md={4}>
                <TextField autoComplete='off' label="body" name='body' onChange={handleInputChange} variant="outlined" value={values.body}/>

            </Grid>
            <Grid item xs={8} sm={6} md={4}>
                <TextField autoComplete='off' label="id" name='id' onChange={handleInputChange} variant="outlined" value={values.id}/>
            </Grid>
            <Grid item xs={8} sm={6} md={4}>
                <Dropdown post={post} handleInputChange={handleInputChange}/>
            </Grid>
            <div>
                <Button 
                    variant='outlined'
                    size='large'
                    color='primary'
                    text='Submit'
                    onClick={console.log('Submitted!')}
                />
                <Button 
                    variant='outlined'
                    size='large'
                    color='secondary'
                    text='Cancel'
                    onClick={console.log('Aborted')}
                />
            </div>
        </Grid>
    );
}