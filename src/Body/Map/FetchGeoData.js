const fetchGeoData = (blogdata) => {
    let mapLocations = [];
    blogdata.map(entry => (
    Geocode.fromAddress(entry.location).then(
        response => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
        let newLocation = {
            "title" : entry.title,
            "location" : entry.location,
            "country" : entry.country,
            "lat" : lat,
            "lng" : lng,
            "author" : entry.author,
            "description" : entry.description
        }
        mapLocations.push(newLocation);
        },
        error => {
        console.error(error);
        }
    )
    ))
    console.log(mapLocations)
};

exort fetchGeoData;
