import Home from './Home';
import {Routes,Route} from 'react-router-dom'
import Login from './pages/login';
import Register from './pages/register';
import CreatePost from './pages/CreatePost';
import PostPage from './pages/PostPage';


function App() {
  return (
   
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/create' element={<CreatePost/>}/>
        <Route path='/post/:id' element={<PostPage/>}/>
    </Routes>
   
    
  );
}

export default App;
