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
				<Route exact path="/PersonalWebsite/about">
					<About />
				</Route>
				<Route exact path="/PersonalWebsite/teaching">
					<Teaching />
				</Route>
				<Route exact path="/PersonalWebsite/news">
					<News />
				</Route>
				<Route exact path="/PersonalWebsite/publications">
					<Publications />
				</Route>
				<Route exact path="/PersonalWebsite/projects">
					<Projects />
				</Route>
				
				{/* path="" put in the end */}
				<Route exact path="/PersonalWebsite">
					<About />
				</Route>
				{/* <Route component={About}></Route> */}
				{/* <Route><AppLayout/></Route> */}
			</Switch>
		</Router>
	);
}

export default App;
