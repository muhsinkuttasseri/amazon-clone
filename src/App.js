import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	Switch,
} from "react-router-dom";

function App() {
	return (
		//BEM
		<Router>
			<div className="App">
				<Header />
				<Switch>
					<Route path="/logIn">
						<h1>login</h1>
						<Checkout />
					</Route>
					<Route path="/checkout">
						<Checkout />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
