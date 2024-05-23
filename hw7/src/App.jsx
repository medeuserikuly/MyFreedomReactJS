import './App.css'
import CardComponent from './components/cardComponent/CardComponent'
import { createStore } from 'redux'
import reducer from './components/reducer'
import {Provider} from 'react-redux'

function App() {
	const store = createStore(reducer)

	return (
		<Provider store={store}>
			<CardComponent/>
		</Provider>
	)
}

export default App
