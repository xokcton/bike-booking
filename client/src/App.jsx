import { Provider } from 'react-redux';
import Bicycle from './pages/Bicycle/Bicycle';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Bicycle />
    </Provider>
  );
};

export default App;
