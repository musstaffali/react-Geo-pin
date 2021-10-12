import React, { useEffect, useRef } from 'react';

export default function Map({ options, onMount }) {
	const props = { ref: useRef() };
	const onLoad = () => {
		const map = new window.google.maps.Map(props.ref.current, options);
		onMount && onMount(map);
	};

	useEffect(() => {
		if (!window.google) {
			const script = document.createElement(`script`);
			script.type = `text/javascript`;
			script.src = `https://maps.google.com/maps/api/js?key=AIzaSyCzMBHp_6AN5KoeI88Y_M-Zz-BxZHQxNVs`;
			const headScript = document.getElementsByTagName(`script`)[0];
			headScript.parentNode.insertBefore(script, headScript);
			script.addEventListener(`load`, onLoad);
			return () => script.removeEventListener(`load`, onLoad);
		} else onLoad();
	});

	return <div {...props} style={{ height: `100%` }} />;
}

Map.defaultProps = {
	options: {
		center: { lat: 36.0726, lng: 79.7920 },
		zoom: 5
	}
};
