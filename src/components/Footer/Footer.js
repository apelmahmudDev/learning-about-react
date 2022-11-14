import React from "react";

const Footer = ({ loggedIn }) => {
	return <div>{loggedIn && <h2>User</h2>}</div>;
};

export default Footer;
