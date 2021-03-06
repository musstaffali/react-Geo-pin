import React from 'react';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import Button from '@material-ui/core/Button';

export default function NewMarker({ markLocations, setMarkLocation, latRef, lonRef }) {
	return (
		<>
			<h4>
				<AddLocationIcon /> Add new Garden
			</h4>
			<form
				id="newMarker"
				onSubmit={e => {
					e.preventDefault();

					const newEntry = {
						coords: { lat: parseFloat(e.target.lat.value), lng: parseFloat(e.target.lon.value) },
						title: e.target.title.value,
						desc: e.target.description.value,
						numb: e.target.number.value,
						mail: e.target.email.value,
						web: e.target.website.value,
						img: e.target.image.value
					};

					const newMarkerData = [...markLocations, newEntry];

					localStorage.setItem('markLocations', JSON.stringify(newMarkerData));
					setMarkLocation(newMarkerData);
					document.getElementById('newMarker').reset();
				}}
			>
				<input type="text" name="title" autoComplete="off" placeholder="New Garden" required />
				<input type="text" name="image" autoComplete="off" placeholder="Image" />
				<input type="text" name="description" autoComplete="off" placeholder="Address" />
				<input type="text" name="number" autoComplete="off" placeholder="Number" />
				<input type="text" name="email" autoComplete="off" placeholder="Email" />
				<input type="text" name="website" autoComplete="off" placeholder="Website" />
				<input type="text" ref={latRef} name="lat" placeholder="Latitude" required />
				<input type="text" ref={lonRef} name="lon" placeholder="Longitude" required />
				<Button variant="contained" type="submit" color="primary">
					Save
				</Button>
			</form>
		</>
	);
}
