import {useState,React} from 'react';
import {storageBook} from '../../services/storage';
import Modal from 'react-modal';
import {useHistory} from 'react-router-dom';
import {makeStyles,Card, CardContent, Typography} from '@material-ui/core';

export default function ReadBook({post}) {
    const history = useHistory();
    const [openBook, setopenBook] = useState(true);
    const useStyles = makeStyles({
        root: {
          minWidth: 275,
        },
        bullet: {
          display: 'inline-block',
          margin: '0 2px',
          transform: 'scale(0.8)',
        },
        title: {
          fontSize: 14,
        },
        pos: {
          marginBottom: 12,
        },
      });
      const classes = useStyles();
        return (
            <div style={{marginLeft: 325, marginBottom: 50}} className='ui content'>
                <Modal isOpen={openBook} onRequestClose = {() => history.push('/')}>
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                A new Book By {post.author}
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {post.title}
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                {post.category.map(item => <li>{item}</li>)}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {post.body}
                            </Typography>
                        </CardContent>
                    </Card>
                </Modal>    
            </div>
        )
}
