import React from "react";

const UserDetails = ({ user: { firstName, secondName, ocupassion } }) => {
	// const { firstName, secondName, ocupassion } = props.user;
	return (
		<div>
			<ul>
				<li>
					<strong>First name: {firstName}</strong>
				</li>
				<li>
					<strong>Second name: {secondName}</strong>
				</li>
				<li>
					<strong>Ocupassion name: {ocupassion}</strong>
				</li>
			</ul>
		</div>
	);
};

export default UserDetails;
