import {useState} from 'react';
import Post from './post';
import Modal from 'react-modal';
import FormCreate from './modals/createForm';
import {storageBook} from '../services/storage';

Modal.setAppElement('#root');
const Posts = () => {
    const [post,setPost] = useState(storageBook());
    const [createPost, setcreatePost] = useState(false);
    const handleDelete = (id) => {
     const newPost = post.filter(p => p.id !== id);
     setPost(newPost);
    }

    return(
       <div className='ui content'>
            <Post posts={post} handleDelete={handleDelete}/>
            <div className='ui container'>
                <button onClick={() => setcreatePost(true)} className='ui inverted blue button'>Create New Post</button>
                <Modal isOpen={createPost} onRequestClose={() => setcreatePost(false)}>
                    <FormCreate post={post}/>
                </Modal>
            </div>
        </div>
    )
}
export default Posts;