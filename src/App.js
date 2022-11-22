import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import About from "./components/About";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* homepage */}
				<Route
					exact
					path="/"
					element={
						<section>
							<Navbar />
							<Hero />
							<Services />
						</section>
					}
				/>

				{/* about page */}
				<Route path="/about" element={<About />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
