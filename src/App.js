import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App(props) {
	return (
		<div>
			<Navbar />
			<Hero />
			<Services />
		</div>
	);
}

export default App;
