import {useState} from 'react';
import Post from './post';
import Modal from 'react-modal';
import FormCreate from './form';
const Posts = () => {
    const [post,setPost] = useState([
        {author: 'Samiur', title:'First Post', body:'Lorem Ipsum....', id:1, category:'Sports'},
        {author: 'Rahaman', title:'Second Post', body:'Lorem Ipsum....', id:2, category:'Politics'},
        {author: 'Khan', title:'Third Post', body:'Lorem Ipsum....', id:3, category:'Science'}

    ]);
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
                    <FormCreate/>
                </Modal>
            </div>
        </div>
    )
}
export default Posts;