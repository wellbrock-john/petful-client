import "./Root.css";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Adopt from "../Adopt/Adopt";
import Landing from "../Landing/Landing";

function Root() {
	return (
		<Router>
			<header>
				<Link to="/">Petful</Link>
			</header>

			<main>
				<Route exact path="/" component={Landing} />
				<Route exact path="/adopt" component={Adopt} />
			</main>
		</Router>
	);
}

export default Root;
