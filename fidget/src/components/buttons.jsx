import React, { useState } from "react";
import styled from "styled-components";

function Buttons() {
	const [color, setColor] = useState();

	const randomColor = (e) => {
		const random = "#" + Math.floor(Math.random() * 16777215).toString(16);
		setColor(random);
	};

	const Button = styled.button`
		position: absolute;
		width: 60px;
		height: 60px;
		margin: 15px;
		border: none;
		border-radius: 50px;
		box-shadow: 0 0 10px black;
		background-color: #3aafd5;
		:hover {
		width: 80px;
		height: 80px;
		background-color: #ffffff;
		}
	`;

	const Div = styled.div`
		position: relative;
		width: 300px;
		height: 300px;
		background-color: #eaeaea;
		border: none;
		border-radius: 50px;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr;
		grid-template-areas: "btn0 . btn1" ". btn2 .";
		.btn0 {
			grid-area: 1/1/2/4;
		}
		.btn1 {
			grid-area: 1/3/2/4;
			:hover {
			width: 80px;
			height: 80px;
			background-color: #e2a706;
		}
		}
		.btn2 {
			grid-area: 2/2/3/3;
			:hover {
			width: 80px;
			height: 80px;
			background-color: #d11111;
		}
		}
		.btn3 {
			grid-area: 3/1/3/3;
			:hover {
			width: 80px;
			height: 80px;
			background-color: #32217e;
		}
		}
		.btn4 {
			grid-area: 3/3/3/3;
			:hover {
			width: 80px;
			height: 80px;
			background-color: #47d111;
		}
		}
	`;

	return (
		<Div className="buttons">
			<Button	className="btn0" style={{ background: `${color}` }}	onClick={randomColor}></Button>
			<Button className="btn1" ></Button>
			<Button className="btn2" ></Button>
			<Button className="btn3" ></Button>
			<Button className="btn4" onClick={randomColor}></Button>
		</Div>
	);
}

export default Buttons;
