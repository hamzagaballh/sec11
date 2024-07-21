import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free';
import Master from './Compoenet/Master/Master'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Compoenet/Home/Home';
import About from './Compoenet/About/About'; 
import './App.css'
import Skills from './Compoenet/Skills/Skills';
import Experince from './Compoenet/EXPERIENCE/Experince.jsx';
import Work from './Compoenet/Work/Work.jsx';
function App() {
  const routes = createBrowserRouter([
    {
      path:'/',
      element:<Master/>,
      children:[
        {index:true, element:<Home/>},
        {path:"Home" ,element:<Home/>},
        {path:"About",element: <About/>},
        {path:"Skills",element: <Skills/>},
        {path:"EXPERIENCE",element: <Experince/>},
        {path:"Work",element: <Work/>},
        
      ],
    },
  ]);
  return (
    <>
            <RouterProvider router={routes}></RouterProvider>

    </>
  )
}

export default App
