import NavItem from "./NavItem";

const Navbar = (props) => {
	const navItems = ["Home", "Contact", "others", "A", "Profile"];

	return (
		<>
			{navItems.map((item) => (
				<NavItem key={item} item={item} />
			))}
		</>
	);
};

export default Navbar;
