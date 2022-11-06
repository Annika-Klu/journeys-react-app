import Geocode from 'react-geocode';
Geocode.setApiKey(process.env.REACT_APP_API_KEY);

const AddGeoData = async function addGeoData (entry) {

    try {
        const response = await Geocode.fromAddress(entry.location);
        const entryGeoData = response.results[0].geometry.location;
        console.log(entryGeoData);

        let mapLocation = {
            "title" : entry.title,
            "author" : entry.author,
            "location" : entry.location,
            "country" : entry.country,
            "lat" : entryGeoData.lat,
            "lng" : entryGeoData.lng,            
            "description" : entry.description
        }
        return(mapLocation);
    } catch (error) {
        console.error(error)
    }
            
}

export default AddGeoData;