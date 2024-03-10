// reducers/feedbackReducer.ts
import { ADD_FEEDBACK } from '../actions/feedbackaction';

interface Feedback {
  name: string;
  feedback: string;
}

interface FeedbackState {
  feedbacks: Feedback[];
}

const initialState: FeedbackState = {
  feedbacks: []
};

const feedbackReducer = (state = initialState, action: any): FeedbackState => {
  switch (action.type) {
    case ADD_FEEDBACK:
      return {
        ...state,
        feedbacks: [...state.feedbacks, action.payload]
      };
    default:
      return state;
  }
};

export default feedbackReducer;
