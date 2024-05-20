import React, { useState } from 'react';

function FundWallet() {
  const [paymentMethod, setPaymentMethod] = useState('Direct Pay');
  const [amount, setAmount] = useState('');

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Payment Method:', paymentMethod);
    console.log('Amount:', amount);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-6 rounded-lg shadow-md w-80"
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
        <div className="flex justify-between">
          <button 
            type="button" 
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
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
