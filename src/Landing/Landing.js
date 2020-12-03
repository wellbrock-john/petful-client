import React from "react";
import { Link } from "react-router-dom";

export default function () {
	return (
		<section id="landing">
			<img alt="Puppy" src="http://place-puppy.com/270x270" />
			<p>
				Here at Petful, we can help you find the perfect furry little companion.
				Enter your information to be put in our adoption que. Then, you only
				need to wait until your turn comes around to be matched with your new
				best friend.
			</p>

			<Link to="/adopt">Start here!</Link>
		</section>
	);
}
