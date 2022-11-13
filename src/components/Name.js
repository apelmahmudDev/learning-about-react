import React from "react";

const Name = ({ user = "Jober", maliha }) => {
	return (
		<div>
			<h1>{user}</h1>
		</div>
	);
};

export default Name;
