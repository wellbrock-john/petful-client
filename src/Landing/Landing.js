import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

export default function () {
	return (
		<section id="landing">
			<img alt="Puppy" src="https://place-puppy.com/240x240" />
			<p>
				Here at Petful, we can help you find the perfect furry little companion.
				Enter your name to be put in our adoption queue. Then, you only need to
				wait until your turn comes around to be matched with your new best
				friend.
			</p>

			<button id="landing-btn">
				<Link to="/adopt">Start here!</Link>
			</button>
		</section>
	);
}
