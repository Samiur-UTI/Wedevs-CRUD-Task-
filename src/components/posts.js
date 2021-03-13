import {useState} from 'react';
import Post from './post';

const Posts = () => {
    const [post,setPost] = useState([
        {author: 'Samiur', title:'First Post', body:'Lorem Ipsum....', id:1, category:'Sports'}
    ]);
    return(
       <div className='ui content'>
            <Post posts={post}/>
        </div>
    )
}
export default Posts;