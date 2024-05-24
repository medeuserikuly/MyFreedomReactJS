import './App.css'
import CardComponent from './CardComponent'
import store from './store';
import { Provider} from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <CardComponent/>
    </Provider>
  )
}

export default App
