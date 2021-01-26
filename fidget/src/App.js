import "./App.css";
import styled from "styled-components";
import Buttons from "./components/buttons";
import Counter from "./components/counter";

function App() {
	const Div = styled.div`
		margin: 20px;
		display: grid;
		width: 600px;
		height: 300px;
		gap: 10px;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr;
		grid-template-areas:
		". ."
		"buttons . counter"
		". .";
	`;

	return (
		<div className="App">
			<Div className="grid-container">
				<Buttons />
				<Counter />
			</Div>
		</div>
	);
}

export default App;
