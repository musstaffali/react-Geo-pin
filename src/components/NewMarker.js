import React from 'react';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import Button from '@material-ui/core/Button';

export default function NewMarker({ markLocations, setMarkLocation, latRef, lonRef }) {
	return (
		<>
			<h4>
				<AddLocationIcon /> New Location
			</h4>
			<form
				id="newMarker"
				onSubmit={e => {
					e.preventDefault();

					const newEntry = {
						coords: { lat: parseFloat(e.target.lat.value), lng: parseFloat(e.target.lon.value) },
						title: e.target.title.value,
						num: e.target.number.value,
						add: e.target.address.value,
						img: e.target.image.value
					};

					const newMarkerData = [...markLocations, newEntry];

					localStorage.setItem('markLocations', JSON.stringify(newMarkerData));
					setMarkLocation(newMarkerData);
					document.getElementById('newMarker').reset();
				}}
			>
				<input type="text" name="title" autoComplete="off" placeholder="Garden name" required />
				<input type="text" name="number" autoComplete="off" placeholder="number" />
				<input type="text" name="address" autoComplete="off" placeholder="address" />
				<input type="text" name="image" autoComplete="off" placeholder="Image" />
				<input type="text" ref={latRef} name="lat" placeholder="Latitude" required />
				<input type="text" ref={lonRef} name="lon" placeholder="Longitude" required />
				<Button variant="contained" type="submit" color="primary">
					Save
				</Button>
			</form>
		</>
	);
}
