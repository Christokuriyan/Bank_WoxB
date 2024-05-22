// import React, { useState } from 'react';

// const WithdrawForm = () => {
//   const [formData, setFormData] = useState({
//     amount: '',
//     accountNumber: '',
//     accountName: '',
//     bank: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen ">
//       <div
//         className="bg-white p-8 rounded-lg "
//         style={{
//           width: '360px',
//           maxWidth: '90%',
//           boxShadow: '0px 0px 150px 25px rgba(51, 183, 134, 0.25)',
//         }}
//       >



//         <h2 className="text-3xl font-bold mb-5 text-left text-[#33B786]">Withdraw</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
//             <input
//               type="text"
//               name="amount"
//               id="amount"
//               value={formData.amount}
//               onChange={handleChange}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:[#33B786] focus:[#33B786] sm:text-sm"
//               placeholder="100,000"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700">Account Number</label>
//             <input
//               type="text"
//               name="accountNumber"
//               id="accountNumber"
//               value={formData.accountNumber}
//               onChange={handleChange}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:[#33B786] focus:border-[#33B786] sm:text-sm"
//               placeholder="00 00 00 00 00"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="accountName" className="block text-sm font-medium text-gray-700">Account Name</label>
//             <input
//               type="text"
//               name="accountName"
//               id="accountName"
//               value={formData.accountName}
//               onChange={handleChange}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:[#33B786] focus:[#33B786] sm:text-sm"
//               placeholder="Enter account name"
//             />
//           </div>
//           <div className="mb-6">
//             <label htmlFor="bank" className="block text-sm font-medium text-gray-700">Bank</label>
//             <select
//               name="bank"
//               id="bank"
//               value={formData.bank}
//               onChange={handleChange}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:[#33B786] focus:[#33B786] sm:text-sm"
//             >
//               <option value="">Bank Name</option>
//               <option value="bank1">Bank 1</option>
//               <option value="bank2">Bank 2</option>
//               <option value="bank3">Bank 3</option>
//             </select>
//           </div>
//           <div className="flex justify-between">
//             <button
//               type="button"
//               className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
//             >
//               Withdraw
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default WithdrawForm;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WithdrawForm = () => {
  const [formData, setFormData] = useState({
    amount: '',
    accountNumber: '',
    accountName: '',
    bank: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Navigate to SuccessMessage page
    navigate('/successmessage');
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div
        className="bg-white p-8 rounded-lg"
        style={{
          width: '360px',
          maxWidth: '90%',
          boxShadow: '0px 0px 150px 25px rgba(51, 183, 134, 0.25)',
        }}
      >
        <h2 className="text-3xl font-bold mb-5 text-left text-[#33B786]">Withdraw</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
            <input
              type="text"
              name="amount"
              id="amount"
              value={formData.amount}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:[#33B786] focus:border-[#33B786] sm:text-sm"
              placeholder="100,000"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700">Account Number</label>
            <input
              type="text"
              name="accountNumber"
              id="accountNumber"
              value={formData.accountNumber}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:[#33B786] focus:border-[#33B786] sm:text-sm"
              placeholder="00 00 00 00 00"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="accountName" className="block text-sm font-medium text-gray-700">Account Name</label>
            <input
              type="text"
              name="accountName"
              id="accountName"
              value={formData.accountName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:[#33B786] focus:border-[#33B786] sm:text-sm"
              placeholder="Enter account name"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="bank" className="block text-sm font-medium text-gray-700">Bank</label>
            <select
              name="bank"
              id="bank"
              value={formData.bank}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:[#33B786] focus:border-[#33B786] sm:text-sm"
            >
              <option value="">Bank Name</option>
              <option value="bank1">Bank 1</option>
              <option value="bank2">Bank 2</option>
              <option value="bank3">Bank 3</option>
            </select>
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => navigate(-1)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Withdraw
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WithdrawForm;
