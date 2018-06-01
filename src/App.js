import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import './assets/css/style.css';
import About from './component/About';
import Menu from './component/Menu';
import MenuCard from './component/MenuCard';
import Header from './component/Header';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Menu/>
					<Switch>
						<Route exact path='/' render={
							props =>
							<div>
								<Header />
								<MenuCard />
							</div>
							} />
						<Route exact path='/about' component={About} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
