import React from 'react';

const RecentUploads = ({ uploads }) => {
  return (
    <>
    <h2 className="text-xl font-semibold mb-4">Recent Uploads</h2>
    <div className="p-6 rounded-lg mt-2">
      <table className="min-w-full">
        <thead className='bg-gray-50'>
          <tr>
            <th className="py-2">Book ID</th>
            <th className="py-2">Book Name</th>
            <th className="py-2">Course Unit</th>
            <th className="py-2">Course Code</th>
            <th className="py-2">Date Scanned</th>
            <th className="py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {uploads.map((upload, index) => (
            <tr key={index} className="text-center border-t">
              <td className="py-2">{upload.bookId}</td>
              <td className="py-2">{upload.name}</td>
              <td className="py-2 ">{upload.units}</td>
              <td className="py-2">{upload.code}</td>
              <td className="py-2">{upload.date}</td>
              <td className="py-2"><button className="bg-white border border-brown-700 text-brown-600 font-normal py-1 px-4 rounded
                      hover:bg-brown-700
                      hover:text-white
                      active:text-white
                      active:bg-brown-700
                      focus:outline-none
                      focus:ring-1 
                      focus:ring-brown-600 
                      focus:ring-opacity-50" 
                      >
                View Book
              </button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default RecentUploads;
