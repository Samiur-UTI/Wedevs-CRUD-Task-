import {useState} from 'react';
import Post from './post';
import Modal from 'react-modal';
import {storageBook, storageCategory} from '../services/storage';
import {FormCreateBook, FormCreateCategory} from './modals/createForm';

Modal.setAppElement('#root');
const Posts = () => {
    const [post,setPost] = useState(storageBook());
    const [createPost, setcreatePost] = useState(false);
    const [category, setCategory] = useState(storageCategory());
    const [createCategory, setcreateCategory] = useState(false);
    const handleDelete = (id) => {
     const newPost = post.filter(p => p.id !== id);
     setPost(newPost);
    }
    return(
       <div className='ui content'>
            <Post category={category} posts={post} handleDelete={handleDelete}/>
            <div className='ui container'>
                <button onClick={() => setcreatePost(true)} className='ui inverted blue button'>Create New Post</button>
                <Modal isOpen={createPost} onRequestClose = {() => setcreatePost(false)}>
                    <FormCreateBook category={category} post={post} setPost={setPost}/>
                </Modal>
                <button onClick={()=> setcreateCategory(true)} className='ui inverted green button'>Create New Category</button>
                <Modal isOpen={createCategory} onRequestClose = {() => setcreateCategory(false)}>
                    <FormCreateCategory category={category} setCategory={setCategory}/>
                </Modal>
            </div>
        </div>
    )
}
export default Posts;