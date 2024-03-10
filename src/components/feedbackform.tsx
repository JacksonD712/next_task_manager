// FeedbackForm.tsx
import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { addFeedback } from '../store/actions/feedbackaction';
import Link from 'next/link'; 
const mapDispatch = {
  addFeedback: (name: string, feedback: string) => addFeedback(name, feedback)
};
const connector = connect(null, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
const FeedbackForm: React.FC<PropsFromRedux> = ({ addFeedback }) => {
  const [feedback, setFeedback] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState(''); 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (feedback.trim() !== '' && name.trim() !== '') { 
      addFeedback(name, feedback);
      setFeedback('');
      setName(''); 
      setMessage('Feedback added successfully!');
      setTimeout(() => setMessage(''), 3000);
    } else {
      setMessage('Please enter both your name and feedback');
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="max-w-xl mx-auto mt-16 flex w-full flex-col border rounded-lg bg-white p-8">
          <h2 className="title-font mb-1 text-lg font-medium text-gray-900">Feedback</h2>
          <p className="mb-5 leading-relaxed text-gray-600">If you had any issues or you liked our product, please share
            with us!
          </p>
          <div className="mb-4">
            <label htmlFor="name" className="text-sm leading-7 text-gray-600">Your Name</label>
            <input
              className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="feedback" className="text-sm leading-7 text-gray-600">Your Feedback</label>
            <input
              className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              type="text"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Enter your feedback"
              required
            />
          </div>
          <button type="submit" className="rounded border-0 bg-custom-blue py-2 px-6 text-lg text-white hover:bg-blue-500 focus:outline-none">Submit</button>
          {message && <p>{message}</p>}
          <Link href="/feedbacklist">
            <p className="mt-3 text-xs text-gray-500">Go to Feedback List</p>
          </Link>
        </div>
      </form>
    </div>
  );
};
export default connector(FeedbackForm);
