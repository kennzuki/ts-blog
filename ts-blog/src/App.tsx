import './App.css';
import Navbar from './components/Navbar';
import PostList from './components/PostCard';

function App() {
  return (
    <div className='bg-white p-12 items-center w-full'>
      <Navbar />
      <PostList/>
    </div>
  );
}

export default App;
