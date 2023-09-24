import Home from './Home';
import {Routes,Route} from 'react-router-dom'
import Login from './pages/login';
import Register from './pages/register';
import CreatePost from './pages/CreatePost';
import PostPage from './pages/PostPage';
import EditPost from './pages/EditPost';
// import EditPost from './pages/EditPost';


function App() {
  return (
   
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/create' element={<CreatePost/>}/>
        <Route path='/post/:id' element={<PostPage/>}/>
        <Route path='/edit/:id'element={<EditPost/>}/>
    </Routes>
   
    
  );
}

export default App;
