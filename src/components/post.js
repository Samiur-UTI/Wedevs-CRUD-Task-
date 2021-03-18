import Category from "./category";
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import ReadBook from './modals/readBook';
import UpdateBook from '../components/modals/updateForm';

const Post = ({posts, setPost, handleDelete,category,setCategory}) => { 
    return(
        <Router>
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
                           <Link to={`/read/${post.id}`}><button className='ui inverted green button'>Read book</button></Link>
                        </div>
                        <div className='three wide column'>
                            <Link to={`/update/${post.id}`}><button className='ui inverted olive button'>Update book</button></Link>
                        </div>
                        <div className='three wide column'>
                            <button key={post.id} className='ui inverted red button' onClick={() => handleDelete(post.id)}>Delete Post</button>
                        </div>
                        <div>
                            <Switch>
                                <Route exact path='/read/:id' render={(props) => <ReadBook {...props} post={posts}/> }></Route>
                                <Route exact path='/update/:id' render={(props) => <UpdateBook {...props} post={posts} category={category} setPost={setPost} setCategory={setCategory}/>}></Route>
                            </Switch>
                        </div>
                    </div>
                ))}
            </div>
        </Router>
    );
}
export default Post;