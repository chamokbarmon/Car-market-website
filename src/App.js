import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Route/Route';

function App() {
  return (
    <RouterProvider className='mx-auto' router={router}>

    </RouterProvider>
  );
}

export default App;
