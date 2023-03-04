import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { DatePicker } from "antd";
import AppLayout from "./pages/layout";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	HashRouter,
} from "react-router-dom";
import About from "./pages/about";
import News from "./pages/news";
import Publications from "./pages/publications";
import Teaching from "./pages/teaching";
import Projects from "./pages/projects";
import Team from "./pages/team";

function App() {
	return (
		<HashRouter>
			<Switch>
				<Route exact path="/about">
					<About />
				</Route>
				<Route exact path="/teaching">
					<Teaching />
				</Route>
				<Route exact path="/team">
					<Team />
				</Route>
				<Route exact path="/news">
					<News />
				</Route>
				<Route exact path="/publications">
					<Publications />
				</Route>
				<Route exact path="/projects">
					<Projects />
				</Route>

				{/* path="" put in the end */}
				<Route path="*">
					<About />
				</Route>
				{/* <Route component={About}></Route> */}
				{/* <Route><AppLayout/></Route> */}
			</Switch>
		</HashRouter>
	);
}

export default App;
