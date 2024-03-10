import { Provider } from 'react-redux';
import store from '../store/store';
import '../styles/globals.css';
import feedbackStore from '../store/feedbackstore'; 
function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Provider store={feedbackStore}>
        <Component {...pageProps} />
      </Provider>
    </Provider>
  );
}

export default App;
