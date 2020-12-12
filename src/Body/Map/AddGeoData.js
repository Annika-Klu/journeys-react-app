import Geocode from 'react-geocode';
Geocode.setApiKey(process.env.REACT_APP_API_KEY);

const AddGeoData = async function addGeoData (entry) {
        
    let response = await Geocode.fromAddress(entry.location);
    let entryGeoData = await response.results[0].geometry.location;
    console.log(entryGeoData);

    let mapLocation = {
        "title" : entry.title,
        "author" : entry.author,
        "location" : entry.location,
        "country" : entry.country,
        "lat" : await entryGeoData.lat,
        "lng" : await entryGeoData.lng,            
        "description" : entry.description
    }

    return(mapLocation);
}

export default AddGeoData;