import { Switch, Route } from 'react-router-dom'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import Home from './pages/Home'
import Header from './components/nav/Header'

function App() {
	return (
		<>
			<Header />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/login" exact component={Login} />
				<Route path="/register" exact component={Register} />
			</Switch>
		</>
	)
}

export default App
