import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App() {
	const userProfile = {
		name: "Maliha",
		number: "25998633",
		img: "https://plus.unsplash.com/premium_photo-1664285652161-e25579afdccd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
	};

	return (
		<div>
			<Navbar user={userProfile} />
			<Hero user={userProfile} />
			<Services user={userProfile} />
		</div>
	);
}

export default App;
