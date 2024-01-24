import { Outlet } from 'react-router-dom';
import Sidebar from './Dashboard/components/Sidebar';
import Navbar from './Dashboard/components/Navbar';


function App() {

  return (
    <div className='md:flex mt-2 gap-0 '>

          <div className=' w-[250px] h-screen hidden lg:block'>
              <Sidebar/>
           </div>
          <div className='flex-1 ml-3'>
               <Navbar />
            <div className='md:mt-3 '>
    
              <Outlet />
    </div>
    </div>
    </div>
      


  )
}

export default App
