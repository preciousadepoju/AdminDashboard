import React, { useState, useEffect } from 'react';
import RecentUploads from './RecentUploads';
import UploadBook from './UploadBook';
import logo from '/public/logo.png';
import logout from '/public/logout.png';

const Dashboard = () => {
  const [uploads, setUploads] = useState([]);
  const [showUploadForm, setShowUploadForm] = useState(true);

  // Load uploads from local storage on component mount
  useEffect(() => {
    const storedUploads = JSON.parse(localStorage.getItem('uploads')) || [];
    setUploads(storedUploads);
  }, []);

  const handleAddUpload = (newUpload) => {
    const updatedUploads = [...uploads, newUpload];
    setUploads(updatedUploads);
    // Save to local storage
    localStorage.setItem('uploads', JSON.stringify(updatedUploads));
  };

  return (
    <div className="min-h-screen bg-grey-600 flex flex-col font-sans text-grey-500">
      <header className="bg-white py-4 px-6 shadow-sm">
        <div className="flex justify-between items-center">
          <img className="w-24 h-15" src={logo} alt="LautechLogo" />
          <div className="text-xl font-semibold"><p>Good Day!</p> Hello Professor Akinfenwa</div>
          <button className="text-brown-700 border-[1px] px-7 py-1 font-thin flex items-center justify-center border-brown-700 rounded-md 
                    hover:bg-brown-700 
                    hover:text-white 
                    active:text-brown-700
                    active:bg-brown-700
                    focus:outline-none
                    focus:ring-1 
                    focus:ring-brown-700 
                    focus:ring-opacity-50">
            <img className="w-4 h-5 mx-1" src={logout} alt="logout" />
            Logout
          </button>
        </div>
      </header>
      <div className="flex flex-1">
        <nav className="bg-white rounded-md m-6 w-64  p-6 shadow-md">
          <ul>
            <li className="mb-4 font-bold">
              <button 
                className="text-grey-500 font-sans  active:text-brown-700 active:border active:p-2 active:rounded-md active:bg-gray-300 "
                onClick={() => setShowUploadForm(true)}
              >
                Book Upload
              </button>
            </li>
            <li className="mb-4 font-bold">
              <button
                className="text-grey-500 font-sans active:text-brown-700 active:border active:p-2 active:rounded-md active:bg-gray-300 "
                onClick={() => setShowUploadForm(false)}
              >
                Upload History
              </button>
            </li>
            <li className="font-bold">
              <button className="text-grey-500 font-sans active:text-brown-700 active:border active:p-2 active:rounded-md active:bg-gray-300 ">Books Management</button>
            </li>
          </ul>
        </nav>
        <main className="flex-1 p-6">
          {showUploadForm ? (
            <UploadBook onAddUpload={handleAddUpload} />
          ) : (
            <RecentUploads uploads={uploads}/>
          )}
        </main>
        
      </div>
    </div>
  );
};

export default Dashboard;
