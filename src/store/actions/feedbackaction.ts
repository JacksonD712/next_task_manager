// actions/feedbackActions.ts
export const ADD_FEEDBACK = 'ADD_FEEDBACK';

export const addFeedback = (name: string, feedback: string) => {
  return {
    type: ADD_FEEDBACK,
    payload: {
      name: name,
      feedback: feedback
    }
  };
};
