import React from "react";
import PropTypes, { object } from "prop-types";

export function Timer (props) {
	return (
		<div
			className="rounded display-2 d-flex align-items-center justify-content-center mx-2 numero"
			id={props.identificador}>
			{props.segundos}
		</div>
	);
}

Timer.propTypes = {
	segundos: PropTypes.string,
	identificador: PropTypes.string
};
