const loadGoogleMapsApi = require('load-google-maps-api');

document.addEventListener('DOMContentLoaded', function() {

    const obj = document.getElementsByClassName('js-map')[0];
    
    let mapenable = false, int;

    const initMap = function() {
        loadGoogleMapsApi({
            key: 'AIzaSyAtmyxhfag5M7TeoTEJMZvKdHEUaT4gkjs'
            }).then(function (googleMaps) {
            
            const el = document.querySelector('.js-map'),
                  lat = Number(el.getAttribute('data-lat')),
                  lng = Number(el.getAttribute('data-lng')),
                  myLatLng = new google.maps.LatLng(lat, lng);
                  markerWidth = 346,
                  markerHeight = 64;
        
            const map = new googleMaps.Map(el, {
                center: myLatLng,
                disableDefaultUI: true,
                zoom: 13,
                styles: [{"elementType": "geometry", "stylers": [{"color": "#19274c"}]},{"elementType": "labels.icon", "stylers": [{"visibility": "off"}]},{"elementType": "labels.text.fill", "stylers": [{"color": "#757575"}]},{"elementType": "labels.text.stroke", "stylers": [{"color": "#212121"}]},{"featureType": "administrative", "elementType": "geometry", "stylers": [{"visibility": "off"}]},{"featureType": "administrative.country", "elementType": "labels.text.fill", "stylers": [{"color": "#9e9e9e"}]},{"featureType": "administrative.land_parcel", "stylers": [{"visibility": "off"}]},{"featureType": "administrative.land_parcel", "elementType": "labels", "stylers": [{"visibility": "off"}]},{"featureType": "administrative.locality", "elementType": "labels.text.fill", "stylers": [{"color": "#bdbdbd"}]},{"featureType": "landscape", "elementType": "geometry.fill", "stylers": [{"color": "#19274c"}]},{"featureType": "poi", "stylers": [{"visibility": "off"}]},{"featureType": "poi", "elementType": "labels.text", "stylers": [{"visibility": "off"}]},{"featureType": "poi", "elementType": "labels.text.fill", "stylers": [{"color": "#757575"}]},{"featureType": "poi.park", "elementType": "geometry", "stylers": [{"color": "#181818"}]},{"featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [{"color": "#616161"}]},{"featureType": "poi.park", "elementType": "labels.text.stroke", "stylers": [{"color": "#1b1b1b"}]},{"featureType": "road", "elementType": "geometry.fill", "stylers": [{"color": "#262e56"}]},{"featureType": "road", "elementType": "labels.icon", "stylers": [{"visibility": "off"}]},{"featureType": "road", "elementType": "labels.text.fill", "stylers": [{"color": "#8a8a8a"}]},{"featureType": "road.arterial", "elementType": "geometry", "stylers": [{"color": "#545b77"}]},{"featureType": "road.highway", "elementType": "geometry", "stylers": [{"color": "#545b77"}]},{"featureType": "road.highway.controlled_access", "elementType": "geometry", "stylers": [{"color": "#545b77"}]},{"featureType": "road.local", "elementType": "labels", "stylers": [{"visibility": "off"}]},{"featureType": "road.local", "elementType": "labels.text.fill", "stylers": [{"color": "#616161"}]},{"featureType": "transit", "stylers": [{"visibility": "off"}]},{"featureType": "transit", "elementType": "labels.text.fill", "stylers": [{"color": "#757575"}]},{"featureType": "water", "elementType": "geometry", "stylers": [{"color": "#303b5a"}]},{"featureType": "water", "elementType": "labels", "stylers": [{"visibility": "off"}]},{"featureType": "water", "elementType": "labels.icon", "stylers": [{"visibility": "off"}]},{"featureType": "water", "elementType": "labels.text", "stylers": [{"visibility": "off"}]},{"featureType": "water", "elementType": "labels.text.fill", "stylers": [{"color": "#3d3d3d"},{"visibility": "off"}]},{"featureType": "water", "elementType": "labels.text.stroke", "stylers": [{"visibility": "off"}]}]
            })
            
            const image = {
				url: el.getAttribute('data-marker'),
				size: new google.maps.Size(markerWidth, markerHeight),
				scaledSize: new google.maps.Size(markerWidth, markerHeight),
				origin: new google.maps.Point(0, 0),
				anchor: new google.maps.Point(markerWidth/2, markerHeight),
				labelOrigin: new google.maps.Point(0, markerHeight)
			}
			
			const marker = new google.maps.Marker({
				position: myLatLng,
				map: map,
				draggable: false,
				zIndex: 20,
				icon: image,
				animation: google.maps.Animation.DROP,				
			});
            
        
        }).catch(function (error) {
            console.error(error)
        })
    };

    const init = function() {
    
        // Fire when show in viewport
        
        clearInterval(int); // for better performance
    
        int = setInterval(function() {
            let bottomOfObject = obj.getBoundingClientRect().top + 200,
            bottomOfWindow = window.innerHeight;
    
            if ( bottomOfWindow > bottomOfObject ) {
                if (mapenable === false) {
                    initMap();
                    console.log('fire map');
                    mapenable = true;
                }
        	}

        }, 50);        
    }
    
    
    
    obj ? window.addEventListener('scroll', init) : false;
    
}, false);


