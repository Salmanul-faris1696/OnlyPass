import { Outlet } from 'react-router-dom';
import Sidebar from './Dashboard/components/common_components/Sidebar';

function App() {
  return (
    <div className="flex h-full relative">
      <div className="h-screen sticky top-0 left-0 ">
        <Sidebar />
      </div>
      <div className="content flex-1  bg-green-400 h-full   ">
        {/* <Navbar /> */}
        <div className="h-full overflow-y-scroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
