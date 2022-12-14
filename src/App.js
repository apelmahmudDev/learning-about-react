import { useState, useEffect } from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
// import Add from "./components/Add";
// import Name from "./components/Name";
// import User from "./components/User";

function App(props) {
	const [loggedIn, setLoggedIn] = useState(false);

	// const name = "Abir Ahmed";
	// // state
	// const [user, setUser] = useState("Jasim");
	// const [count, setCount] = useState(0);

	// const handleChangeName = () => {
	// 	setUser(name);
	// };

	// useEffect(() => {
	// 	console.log("render");
	// }, [user, count]);

	return (
		<>
			<Navbar loggedIn={loggedIn} />
			<Footer loggedIn={loggedIn} />

			{/* <User />
			<Name user="Ekramul" />
			<Add a={3} b={5} />
			<Add a={10} b={20} />

			<h1>{count}</h1>
			<h2>{user}</h2>
			<button onClick={handleChangeName}>Change name</button>
			<button onClick={() => setCount((prevState) => prevState + 1)}>
				Increment
			</button> */}
		</>
	);
}

export default App;
