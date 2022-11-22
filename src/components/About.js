import { useEffect } from "react";

const About = () => {
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((json) => console.log(json));
	}, []);

	return <div>About</div>;
};

export default About;
