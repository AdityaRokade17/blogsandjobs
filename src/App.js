import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import {blogsData} from "./blogsData"
import Jobs from './pages/Jobs';
import Blog from './pages/Blog';
function App() {
  return (
    <div className="App">

      <div>
        <Navbar/>
      </div>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/blogs' element={<Blogs blogsData = {blogsData}/>} />
        <Route path='/jobs' element={<Jobs/>} />

        <Route path='/blogs/blog' element={<Blog blogsData = {blogsData}/>} />
      </Routes>



    </div>
  );
}

export default App;
