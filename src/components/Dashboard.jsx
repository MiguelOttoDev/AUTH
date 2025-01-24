import  { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from a functional API or use mock data for testing
    axios.get('https://jsonplaceholder.typicode.com/todos') // Use a functional API
      .then(response => {
        // Mock some data structure for the example
        const mockData = {
          totalSales: 14000,
          newUsers: 1200,
          activeProjects: 34,
          supportTickets: 18,
          statistics: response.data.slice(0, 12).map((item, index) => ({
            name: `Item ${index + 1}`,
            value: item.id * 10
          })),
          reports: [
            { date: "2025-01-24", name: "Sales Report", status: "Completed" },
            { date: "2025-01-23", name: "User Report", status: "Pending" },
            { date: "2025-01-22", name: "Project Report", status: "In Progress" }
          ]
        };
        setData(mockData);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('Failed to load data');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen bg-gray-900 text-gray-200">Loading...</div>;
  }

  if (error) {
    return <div className="flex items-center justify-center min-h-screen bg-gray-900 text-gray-200">{error}</div>;
  }

  return (
    <div className="flex min-h-screen bg-gray-900 text-gray-200">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 p-6">
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
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Welcome to Your Dashboard</h2>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 focus:bg-blue-800 focus:ring focus:ring-blue-500">New Report</button>
            <button className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 focus:bg-blue-800 focus:ring focus:ring-blue-500">Settings</button>
          </div>
        </header>

        {/* Content Sections */}
        <section id="overview" className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 bg-gray-800 rounded shadow">
              <h4 className="text-lg font-bold mb-2">Total Sales</h4>
              <p className="text-2xl font-semibold">${data.totalSales || 0}</p>
            </div>
            <div className="p-4 bg-gray-800 rounded shadow">
              <h4 className="text-lg font-bold mb-2">New Users</h4>
              <p className="text-2xl font-semibold">{data.newUsers || 0}</p>
            </div>
            <div className="p-4 bg-gray-800 rounded shadow">
              <h4 className="text-lg font-bold mb-2">Active Projects</h4>
              <p className="text-2xl font-semibold">{data.activeProjects || 0}</p>
            </div>
            <div className="p-4 bg-gray-800 rounded shadow">
              <h4 className="text-lg font-bold mb-2">Support Tickets</h4>
              <p className="text-2xl font-semibold">{data.supportTickets || 0}</p>
            </div>
          </div>
        </section>

        <section id="stats" className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Statistics</h3>
          <div className="bg-gray-800 p-6 rounded shadow">
            {/* Chart */}
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data.statistics}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section id="reports" className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Reports</h3>
          <div className="bg-gray-800 p-6 rounded shadow">
            {/* Placeholder for a table */}
            <div className="overflow-x-auto">
              <table className="min-w-full bg-gray-700">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left">Date</th>
                    <th className="px-4 py-2 text-left">Report</th>
                    <th className="px-4 py-2 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data.reports.map((report, index) => (
                    <tr key={index}>
                      <td className="border-t border-gray-600 px-4 py-2">{report.date}</td>
                      <td className="border-t border-gray-600 px-4 py-2">{report.name}</td>
                      <td className="border-t border-gray-600 px-4 py-2">{report.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;