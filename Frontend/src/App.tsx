import { Outlet } from 'react-router-dom';
import Sidebar from './Dashboard/components/Sidebar';

function App() {
  return (
    <div className="flex w-full h-screen ">
      <div className=" ">
        <Sidebar />
      </div>
      <div className="flex-1 ml-3">
        {/* <Navbar /> */}
        <div className="h-screen">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
