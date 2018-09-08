//https://api.inaturalist.org/v1/observations/16088460
// results[0].photos[0].url
// "https://static.inaturalist.org/photos/24098279/square.jpg?1535771973"
// swap square for large
// https://static.inaturalist.org/photos/24098279/large.jpg?1535771973

function getObservationData(observationId) {
	return (
		fetch(`https://api.inaturalist.org/v1/observations/${observationId}`)
			.then(res => res.json())
			.then(data => {
				console.log(data);
				let observationData = {};
				observationData.sqImageUrl = data.results[0].photos[0].url;
				observationData.speciesGuess = data.results[0].species_guess;
				observationData.placeGuess = data.results[0].place_guess;
				observationData.geojson = data.results[0].geojson;
				observationData.location = data.results[0].location;
				observationData.scientificName =
					data.results[0].community_taxon.name;
				observationData.commonName =
					data.results[0].community_taxon.preferred_common_name;
				observationData.observedOnDate = new Date(
					data.results[0].observed_on_string
				);
				return observationData;
			})
			// Have to find the large image url elsewhere
			.then(observationData => {
				let regex = /square/gi;
				observationData.lgImageUrl = observationData.sqImageUrl.replace(
					regex,
					"large"
				);
				observationData.mdImageUrl = observationData.sqImageUrl.replace(
					regex,
					"medium"
				);
				observationData.smImageUrl = observationData.sqImageUrl.replace(
					regex,
					"small"
				);
				return observationData;
			})
			.then(observationData => {
				console.log(observationData);
				this.setState({
					isLoaded: true,
					imgUrl: observationData.lgImageUrl,
					imgAlt: `${observationData.commonName}, ${
						observationData.scientificName
					}`,
					location: observationData.location,
					scientificName: observationData.scientificName,
					commonName: observationData.commonName,
					observedOnDate: observationData.observedOnDate
				});
			})
	);
}

export default getObservationData;
