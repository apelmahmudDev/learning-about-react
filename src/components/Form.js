import React, { useState } from "react";
import UserDetails from "./UserDetails";

const Form = () => {
	const [firstName, setFirstName] = useState("");
	const [secondName, setSecondName] = useState("");
	const [ocupassion, setOcupassion] = useState("");

	const [user, setUser] = useState({});

	const handleSubmit = (e) => {
		e.preventDefault();

		const userDetails = { firstName, secondName, ocupassion };
		setUser(userDetails);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					onChange={(e) => setFirstName(e.target.value)}
					type="text"
					name="firstName"
					placeholder="First Name"
				/>
				<br />
				<br />
				<input
					onChange={(e) => setSecondName(e.target.value)}
					type="text"
					name="secondName"
					placeholder="Second Name"
				/>
				<br />
				<br />
				<input
					onChange={(e) => setOcupassion(e.target.value)}
					type="text"
					name="ocupassion"
					placeholder="Ocupassion"
				/>
				<br />
				<br />

				<button type="submit">Submit</button>
			</form>

			<hr />
			<UserDetails user={user} />
		</div>
	);
};

export default Form;
