import axios from "axios";
import React, { useEffect, useState } from "react";
import api from "./api";
const TestJS = () => {
	const [data, setData] = useState();
	const [error, setError] = useState();

	useEffect(() => {
		api
			.get("/posts")
			.then((response) => {
				setData(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	console.log(data);
	return (
		<div>
			<h2>Axios Test With Intercepters</h2>
		</div>
	);
};
export default TestJS;
