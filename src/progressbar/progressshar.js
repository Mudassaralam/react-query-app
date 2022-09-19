import React, { useEffect, useState } from "react";

const ProgressProvider = (props) => {
	// timeout = undefined;

	// state = {
	// 	value: this.props.valueStart,
	// };

	const [value, setValue] = useState(0);

	// static defaultProps = {
	// 	valueStart: 0,
	// };

	useEffect(() => {
		window.setTimeout(() => {
			setValue(props.value);
		}, 0);
	}, []);

	// componentDidUpdate(prevProps, prevState) {
	// 	if (prevProps.valueEnd !== this.props.valueEnd) {
	// 		this.setState({
	// 			value: this.props.valueEnd,
	// 		});
	// 	}
	// }

	// componentWillUnmount() {
	// 	window.clearTimeout(this.timeout);
	// }

	return props.value;
};

export default ProgressProvider;
