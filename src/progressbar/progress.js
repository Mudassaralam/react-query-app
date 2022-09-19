import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ProgressProvider from "./progressshar";

const Progress = () => {
	const [valueEnd, setValueEnd] = React.useState(66);

	const percentage = 66;
	return (
		<div style={{ width: "20%", height: "10%" }}>
			<ProgressProvider valueStart={10} valueEnd={valueEnd}>
				{(value) => <CircularProgressbar value={value} text={`${value}%`} />}
			</ProgressProvider>
		</div>
	);
};
export default Progress;
