export default function Header(){
    return(
        <header className="flex flex-col md:flex-row items-center justify-between mb-8">
          <h2 className="text-2xl font-bold mb-4 md:mb-0">Welcome to Your Dashboard</h2>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 focus:bg-blue-800 focus:ring focus:ring-blue-500">New Report</button>
            <button className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 focus:bg-blue-800 focus:ring focus:ring-blue-500">Settings</button>
          </div>
        </header>
    )
}