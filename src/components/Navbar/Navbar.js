import NavItem from "./NavItem";

const Navbar = (props) => {
	const { loggedIn } = props;

	let value = true;
	let userInfo = "";

	if (value) {
		userInfo = <NavItem item="User" />;
	} else {
		userInfo = <NavItem item="Login" />;
	}

	return (
		<>
			<NavItem item="Home" />
			<NavItem item="Menu" />
			{userInfo}
		</>
	);
};

export default Navbar;
