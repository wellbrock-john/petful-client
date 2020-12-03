import "./People.css";
import React from "react";

export default function ({ handleNewPerson, currentPerson, people }) {
	function handleSubmit(event) {
		event.preventDefault();

		handleNewPerson(event.target["name"].value);
		event.target["name"].value = "";
	}

	return (
		<section id="people-section">
			{!currentPerson && (
				<div id="enter-que">
					<p>Enter the que to adopt your new pet!</p>

					<form onSubmit={handleSubmit}>
						<input required id="name" type="text" placeholder="Name" />
						<input type="submit" value="Enter que" />
					</form>
				</div>
			)}

			<p>Currently in que:</p>

			<ul>
				{people.map((person, index) => {
					return <li key={index}>{person}</li>;
				})}
			</ul>
		</section>
	);
}
