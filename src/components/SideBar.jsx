import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Sidebar() {

  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (


    <div className="w-full md:w-64 bg-gray-800 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Dashboard</h1>
      <nav>
        <ul className="space-y-4">
          <li>
            <a href="#overview" className="block px-4 py-2 rounded hover:bg-gray-700">Overview</a>
          </li>
          <li>
            <a href="#stats" className="block px-4 py-2 rounded hover:bg-gray-700">Statistics</a>
          </li>
          <li>
            <a href="#reports" className="block px-4 py-2 rounded hover:bg-gray-700">Reports</a>
          </li>
          <li>
            <a href="#settings" className="block px-4 py-2 rounded hover:bg-gray-700">Settings</a>
          </li>
          <li>
            <a onClick={handleLogout} href="#settings" className="block px-4 py-2 rounded hover:bg-gray-700">Exit</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}