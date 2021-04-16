import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { DatePicker } from "antd";
import AppLayout from "./pages/layout";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./pages/about";
import News from "./pages/news";
import Publications from "./pages/publications";
import Teaching from "./pages/teaching";
import Projects from "./pages/projects";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/about">
					<About />
				</Route>
				<Route exact path="/teaching">
					<Teaching />
				</Route>
				<Route exact path="/news">
					<News />
				</Route>
				<Route exact path="/publications">
					<Publications />
				</Route>
				<Route exact path="/ind-project">
					<Projects />
				</Route>
				{/* path="" put in the end */}
				<Route exact path="">
					<About />
				</Route>
				{/* <Route component={About}></Route> */}
				{/* <Route><AppLayout/></Route> */}
			</Switch>
		</Router>
	);
}

export default App;
