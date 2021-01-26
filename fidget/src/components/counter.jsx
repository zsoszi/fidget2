import React, { useState } from "react";
import styled from "styled-components";

function Counter() {
	const [count, setCount] = useState(0);

	const Div = styled.div`
		position: relative;
		width: 300px;
		height: 300px;
		border-radius:50px;
		background-color: #eaeaea;
		border: none;
		gap: 15px;
	`;

	const Button = styled.button`
		position: absolute;
		width: 60px;
		height: 60px;
		top: 20%;
		background-color: #3aafd5;
		border: none;
		border-radius: 50px;
		box-shadow: 0 0 10px black;
		outline: none;
		right: 20%;
	`;

	const Button1 = styled.button`
		position: absolute;
		width: 60px;
		height: 60px;
		top: 20%;
		background-color: #3aafd5;
		border: none;
		border-radius: 50px;
		box-shadow: 0 0 10px black;
		outline: none;
		left: 20%;
	`;

	const H2 = styled.div`
		position: absolute;
		color: #3aafd5;
		text-align: center;
		font-size: 80px;
		top: 50%;
		left: 50%;
		transform: translateX(-50%);
	`;
	const I = styled.i`
		color:white;
		font-size:30px;
	`;

	return (
		<Div className="counter">
			<H2 className="btnZero">{count}</H2>
			<Button className="btnInc" onClick={() => setCount(count + 1)}>
				<I className="fas fa-plus"></I>
			</Button>{" "}
			<Button1 className="btnDec" onClick={() => setCount(count - 1)}>
				<I className="fas fa-minus"></I>
			</Button1>
		</Div>
	);
}

export default Counter;
