// import React, { useState } from 'react';

// function FundWallet() {
//   const [paymentMethod, setPaymentMethod] = useState('Direct Pay');
//   const [amount, setAmount] = useState('');
//   const [cardNumber, setCardNumber] = useState('');
//   const [cardHolderName, setCardHolderName] = useState('');
//   const [expiryDate, setExpiryDate] = useState('');
//   const [cvv, setCvv] = useState('');

//   const handlePaymentMethodChange = (e) => {
//     setPaymentMethod(e.target.value);
//   };

//   const handleAmountChange = (e) => {
//     setAmount(e.target.value);
//   };

//   const handleCardNumberChange = (e) => {
//     setCardNumber(e.target.value);
//   };

//   const handleCardHolderNameChange = (e) => {
//     setCardHolderName(e.target.value);
//   };

//   const handleExpiryDateChange = (e) => {
//     setExpiryDate(e.target.value);
//   };

//   const handleCvvChange = (e) => {
//     setCvv(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic
//     console.log('Payment Method:', paymentMethod);
//     console.log('Amount:', amount);
//     if (paymentMethod === 'Credit Card') {
//       console.log('Card Number:', cardNumber);
//       console.log('Card Holder Name:', cardHolderName);
//       console.log('Expiry Date:', expiryDate);
//       console.log('CVV:', cvv);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100" >
//       <form 
//         onSubmit={handleSubmit} 
//         className="bg-white p-6 rounded-lg w-80 "style={{ boxShadow: '0px 0px 150px 25px rgba(51, 183, 134, 0.25)' }}
//       >
//         <h2 className="text-2xl font-semibold text-center mb-6 text-green-600">Fund Wallet</h2>
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Select Payment Method</label>
//           <div className="flex justify-around">
//             <label className="flex items-center">
//               <input 
//                 type="radio" 
//                 value="Direct Pay" 
//                 checked={paymentMethod === 'Direct Pay'} 
//                 onChange={handlePaymentMethodChange} 
//                 className="form-radio text-green-600"
//               />
//               <span className="ml-2">Direct Pay</span>
//             </label>
//             <label className="flex items-center">
//               <input 
//                 type="radio" 
//                 value="Credit Card" 
//                 checked={paymentMethod === 'Credit Card'} 
//                 onChange={handlePaymentMethodChange} 
//                 className="form-radio text-green-600"
//               />
//               <span className="ml-2">Credit Card</span>
//             </label>
//           </div>
//         </div>
//         <div className="mb-6">
//           <label className="block text-gray-700 mb-2">Amount</label>
//           <input 
//             type="text" 
//             value={amount} 
//             onChange={handleAmountChange} 
//             placeholder="100,000" 
//             className="w-full px-4 py-2 border border-gray-300 rounded-md"
//           />
//         </div>
//         {paymentMethod === 'Credit Card' && (
//           <div className="mb-6 space-y-4">
//             <div className="flex flex-col">
//               <label className="block text-gray-700 mb-2">Card Number</label>
//               <input 
//                 type="text" 
//                 value={cardNumber} 
//                 onChange={handleCardNumberChange} 
//                 placeholder="Card Number" 
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md"
//               />
//             </div>
//             <div className="flex flex-col">
//               <label className="block text-gray-700 mb-2">Card Holder Name</label>
//               <input 
//                 type="text" 
//                 value={cardHolderName} 
//                 onChange={handleCardHolderNameChange} 
//                 placeholder="Card Holder Name" 
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md"
//               />
//             </div>
//             <div className="flex space-x-4">
//               <div className="flex flex-col flex-1">
//                 <label className="block text-gray-700 mb-2">Expiry Date</label>
//                 <input 
//                   type="text" 
//                   value={expiryDate} 
//                   onChange={handleExpiryDateChange} 
//                   placeholder="MM/YY" 
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md"
//                 />
//               </div>
//               <div className="flex flex-col flex-1">
//                 <label className="block text-gray-700 mb-2">CVV</label>
//                 <input 
//                   type="text" 
//                   value={cvv} 
//                   onChange={handleCvvChange} 
//                   placeholder="CVV" 
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md"
//                 />
//               </div>
//             </div>
//           </div>
//         )}
//         <div className="flex justify-between">
//           <button 
//             type="button" 
//             className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
//           >
//             Cancel
//           </button>
//           <button 
//             type="submit" 
//             className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
//           >
//             Fund
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default FundWallet;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FundWallet() {
  const [paymentMethod, setPaymentMethod] = useState('Direct Pay');
  const [amount, setAmount] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const navigate = useNavigate();

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleCardHolderNameChange = (e) => {
    setCardHolderName(e.target.value);
  };

  const handleExpiryDateChange = (e) => {
    setExpiryDate(e.target.value);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Payment Method:', paymentMethod);
    console.log('Amount:', amount);
    if (paymentMethod === 'Credit Card') {
      console.log('Card Number:', cardNumber);
      console.log('Card Holder Name:', cardHolderName);
      console.log('Expiry Date:', expiryDate);
      console.log('CVV:', cvv);
    }
    // Navigate to SuccessMessage page
    navigate('/successmessage');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-6 rounded-lg w-80" 
        style={{ boxShadow: '0px 0px 150px 25px rgba(51, 183, 134, 0.25)' }}
      >
        <h2 className="text-2xl font-semibold text-center mb-6 text-green-600">Fund Wallet</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Select Payment Method</label>
          <div className="flex justify-around">
            <label className="flex items-center">
              <input 
                type="radio" 
                value="Direct Pay" 
                checked={paymentMethod === 'Direct Pay'} 
                onChange={handlePaymentMethodChange} 
                className="form-radio text-green-600"
              />
              <span className="ml-2">Direct Pay</span>
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                value="Credit Card" 
                checked={paymentMethod === 'Credit Card'} 
                onChange={handlePaymentMethodChange} 
                className="form-radio text-green-600"
              />
              <span className="ml-2">Credit Card</span>
            </label>
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Amount</label>
          <input 
            type="text" 
            value={amount} 
            onChange={handleAmountChange} 
            placeholder="100,000" 
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        {paymentMethod === 'Credit Card' && (
          <div className="mb-6 space-y-4">
            <div className="flex flex-col">
              <label className="block text-gray-700 mb-2">Card Number</label>
              <input 
                type="text" 
                value={cardNumber} 
                onChange={handleCardNumberChange} 
                placeholder="Card Number" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label className="block text-gray-700 mb-2">Card Holder Name</label>
              <input 
                type="text" 
                value={cardHolderName} 
                onChange={handleCardHolderNameChange} 
                placeholder="Card Holder Name" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex space-x-4">
              <div className="flex flex-col flex-1">
                <label className="block text-gray-700 mb-2">Expiry Date</label>
                <input 
                  type="text" 
                  value={expiryDate} 
                  onChange={handleExpiryDateChange} 
                  placeholder="MM/YY" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex flex-col flex-1">
                <label className="block text-gray-700 mb-2">CVV</label>
                <input 
                  type="text" 
                  value={cvv} 
                  onChange={handleCvvChange} 
                  placeholder="CVV" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
        )}
        <div className="flex justify-between">
          <button 
            type="button" 
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
          <button 
            type="submit" 
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Fund
          </button>
        </div>
      </form>
    </div>
  );
}

export default FundWallet;
