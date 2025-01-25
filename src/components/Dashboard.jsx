import Sidebar from './SideBar';
import ContentSection from './ContentSection';
import Header from './Header'
const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-900 text-gray-200">
      <Sidebar />
      <div className="flex-1 p-6">
        <Header/>
        <ContentSection />
      </div>
    </div>
  );
};

export default Dashboard;