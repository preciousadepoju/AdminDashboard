import React, { useState } from 'react';
import Modal from 'react-modal';
import upload from '/public/upload.png';

Modal.setAppElement('#root');

const UploadBook = ({ onAddUpload }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [bookName, setBookName] = useState('');
  const [courseUnits, setCourseUnits] = useState('');
  const [about, setAbout] = useState('');
  const [imageFile, setImageFile] = useState(null);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    const newUpload = {
      id: Date.now(),
      bookId: 'New ID',
      name: bookName,
      units: courseUnits,
      code: 'New Code',
      date: new Date().toLocaleDateString()
    };
    onAddUpload(newUpload);
    setBookName('');
    setCourseUnits('');
    setAbout('');
    setImageFile(null);
    closeModal();
  };

  return (
    <div className="bg-white p-6 w-[20%] h-48 rounded-lg shadow-sm">
      <button onClick={openModal} className=" w-full h-36 flex flex-col items-center justify-center text-gray-500">
        <img className="w-10 h-10" src={upload} alt="upload" />
        <span className='mt-5'>Upload a New Book</span>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Upload Book Modal"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2 className="text-xl font-semibold mb-4">Upload a New Book</h2>
        <form onSubmit={handleUpload}>
          <div className="mb-4">
            <label className="block text-gray-700">Book Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded mt-2"
              value={bookName}
              onChange={(e) => setBookName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Number of Course Units</label>
            <input
              type="number"
              className="w-full p-2 border rounded mt-2"
              value={courseUnits}
              onChange={(e) => setCourseUnits(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">About the Book</label>
            <textarea
              className="w-full p-2 border rounded mt-2"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            />
          </div>
          <label className="custum-file-upload h-1/2 my-3 w-full flex flex-col items-center justify-center gap-5 cursor-pointer border-2 border-dashed border-gray-300 bg-white p-6 rounded-lg ">
            <div className="icon flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill=""
                viewBox="0 0 24 24"
                className="h-20 fill-gray-600"
              >
                <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
                <g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill=""
                    d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="text flex items-center justify-center">
              <span className="font-medium text-gray-600">Click to upload cover image</span>
            </div>
            <input type="file" id="file" className="hidden" onChange={(e) => setImageFile(e.target.files[0])} />
          </label>
          {/* <div className="mb-4">
            <label className="block text-gray-700">Add Image</label>
            <input 
              type="file" 
              className="w-full p-2 border rounded mt-2" 
              onChange={(e) => setImageFile(e.target.files[0])}
            />
          </div> */}
          <div className='flex justify-center items-center'>
            <button type="submit" className="bg-brown-600 w-64
           px-4 py-2 text-white rounded">Upload Book</button>
          </div>
          {/* <button onClick={closeModal} className="bg-red-600 text-white px-4 py-2 rounded ml-2">Cancel</button> */}
        </form>
      </Modal>
    </div>
  );
};

export default UploadBook;
