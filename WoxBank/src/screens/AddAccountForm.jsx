import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import "../screens/transactionStyle.css"
Modal.setAppElement('#root'); // Set the app root element for accessibility

const AddAccountForm = ({isOpen, onRequestClose}) => {
  const [accountName, setAccountName] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleAccountNameChange = (e) => {
    setAccountName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic 
    console.log('Account Name:', accountName);
    console.log('Description:', description);
    // Navigate to another page if needed
    navigate('/successmessage', {
      state: {
        display: true,
        message: ` has been sent to your Bank Account`
      }
    });
  };


  const handleCancel = () => {
  };


  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Add Account"
      className="modal"
      overlayClassName="modal-overlay"
    >
      <div className="flex items-center justify-center  ">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-semibold text-center mb-6 text-green-600">Add Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Account Name</label>
              <input
                type="text"
                value={accountName}
                onChange={handleAccountNameChange}
                placeholder="Enter name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Short Description</label>
              <textarea
                value={description}
                onChange={handleDescriptionChange}
                placeholder="Description"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={onRequestClose}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>

  );
};

export default AddAccountForm;
