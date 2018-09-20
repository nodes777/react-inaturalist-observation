import React, { Component } from "react";

import getObservationImage from "./getObservationData";

import Loader from "./Loader";

class Observation extends Component {
	constructor(props) {
		super(props);
		this.getObservationImage = getObservationImage.bind(this);
		this.state = {
			error: null,
			isLoaded: false,
			imgUrl: null,
			imgAlt: null,
			location: null,
			scientificName: null,
			commonName: null,
			observedOnDate: null
		};
	}

	componentDidMount() {
		this.getObservationImage(this.props.observationId);
	}

	render() {
		const {
			error,
			isLoaded,
			commonName,
			scientificName,
			imgUrl,
			imgAlt,
			location,
			observedOnDate
		} = this.state;

		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return <Loader />;
		} else {
			return (
				<div>
					<h2>{commonName}</h2>
					<h3>{scientificName}</h3>
					<img src={imgUrl} alt={imgAlt} />;
					<p>{location}</p>
				</div>
			);
		}
	}
}

export default Observation;
