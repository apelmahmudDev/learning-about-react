import Form from "./components/Form";

function App(props) {
	const defaultStyle = { margin: "10px", padding: "5px" };

	return (
		<div style={defaultStyle}>
			<h1>Form</h1>
			<Form />
		</div>
	);
}

export default App;
