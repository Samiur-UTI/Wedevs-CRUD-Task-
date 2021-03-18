import {useState} from 'react';
import Post from './components/post';
import Modal from 'react-modal';
import {storageBook, storageCategory} from './services/storage';
import {FormCreateBook, FormCreateCategory} from './components/modals/createForm';
import { Link,Route, Switch } from 'react-router-dom';

Modal.setAppElement('#root');
const Posts = () => {
    const [post,setPost] = useState(storageBook());
    const [createPost, setcreatePost] = useState(false);
    const [category, setCategory] = useState(storageCategory());
    const handleDelete = (id) => {
     const newPost = post.filter(p => p.id !== id);
     setPost(newPost);
    }
    return(
       <div className='ui content ui container'>
            <Post setPost={setPost} setCategory={setCategory} category={category} posts={post} handleDelete={handleDelete}/>
            <div className='ui container'>
                <button onClick={() => setcreatePost(true)} className='ui inverted blue button'>Create New Post</button>
                <Modal isOpen={createPost} onRequestClose = {() => setcreatePost(false)}>
                    <FormCreateBook category={category} post={post} setPost={setPost}/>
                </Modal>
                <Link to='/createcat'><button className='ui inverted green button'>Create New Category</button></Link>
                <div>
                    <Switch>
                        <Route exact path='/createcat' render={(props) => <FormCreateCategory category={category} setCategory={setCategory}/>}/>
                    </Switch>
                </div>
            </div>
        </div>
    )
}
export default Posts;