
const Post = ({posts}) => {
    console.log(posts);
    return(
        <div className='ui segment'>
            {posts.map(post => (
                <div className='ui grid'>
                    <div className='four wide column'>
                        <h1 key={post.id}>{post.title}</h1>
                    </div>
                    <div className='four wide column'>
                        <p key={post.id}>{post.body}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default Post;