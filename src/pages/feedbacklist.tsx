// FeedbackList.tsx
import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../store/reducers/rootreduces';
import Navbar from '@/components/navbar';
import Link from 'next/link'; 

const mapState = (state: RootState) => ({
  feedbackList: state.feedback.feedbacks
});
const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;

const FeedbackList: React.FC<PropsFromRedux> = ({ feedbackList }) => {
  return (
    <div>  
      <Navbar/>

      <div className="min-h-screen bg-custom-blue flex flex-col py-12 sm:px-6 lg:px-8 px-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="text-center text-3xl leading-9 font-extrabold text-white">
            Feedback List
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg w-full sm:px-10">
         
        
          <ul>
        {feedbackList.map((item, index) => (
          <li className=' border-b-8 text-center' key={index}>
            <p>Name: {item.name}</p>
            <p>Feedback: {item.feedback}</p>
          </li>
        ))}
      </ul>
          </div>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <Link href="/feedback">
            <button className="bg-custom-blue hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Go to Feedback Form
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default connector(FeedbackList);
