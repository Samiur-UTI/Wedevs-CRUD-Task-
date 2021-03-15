import Category from "./category";

const Post = ({posts, handleDelete}) => {
    const handleRead = (body) => console.log(body); 
    const handleUpdate = (id) => console.log(id);  
    return(
        <div className='ui segment'>
            {posts.map(post => (
                <div className='ui grid'>
                    <div className='three wide column'>
                        <h1 key={post.id}>{post.title}</h1>
                    </div>
                    <div className='three wide column'>
                        <Category post={post}/>
                    </div>
                    <div className='three wide column'>
                        <button key={post.id} className='ui inverted violet button' onClick={() => handleRead(post.body)}>Read Post</button>
                    </div>
                    <div className='three wide column'>
                        <button key={post.id} className='ui inverted olive button' onClick={() => handleUpdate(post.body)}>Update Post</button>
                    </div>
                    <div className='three wide column'>
                        <button key={post.id} className='ui inverted red button' onClick={() => handleDelete(post.id)}>Delete Post</button>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default Post;