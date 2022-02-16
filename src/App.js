import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
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
				<Switch>
					{/* checkout page */}
					<Route path="/checkout">
						<Header />
						<h1>checkout page</h1>
					</Route>
					<Route path="/">
						<Header />
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
