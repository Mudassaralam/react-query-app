import axios from "axios";
import React from "react";

const api = axios.create({
	baseURL: "https://jsonplaceholder.typicode.com/",
	timeout: 1000,
});

// Add a request interceptor
api.interceptors.request.use(
	function (config) {
		// Do something before request is sent
		console.log("req sent");
		// Object.assign(config, { test: "test request" });
		// console.log(config);
		return config;
	},
	function (error) {
		// Do something with request error
		return Promise.reject(error);
	}
);

// Add a response interceptor
api.interceptors.response.use(
	function (response) {
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		console.log("response get");
		// Object.assign(response, {
		// 	data: { list: response.data, message: "User List" },
		// });
		// console.log(response);
		return response;
	},
	function (error) {
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		return Promise.reject(error);
	}
);

export default api;
