async function weatherSearch(location) {
    try {
        let geoCode = await _getGeoCode(location);

        let response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${geoCode.lat}&lon=${geoCode.lon}&APPID=07635fa17157cfd961af367e15eeb273&units=imperial`,
            { mode: "cors" }
        );
        return await response.json();
    } catch (err) {
        return false;
    }
}
async function _getGeoCode(location) {
    let response;
    let place;
    try {
        if (/^[0-9]{5}$/.test(location)) {
            try {
                response = await fetch(
                    `https://api.openweathermap.org/geo/1.0/zip?zip=${location},US&appid=07635fa17157cfd961af367e15eeb273`,
                    { mode: "cors" }
                );
                if (response.status >= 400 && response.status < 600) {
                    throw new Error("Bad response from server");
                }
                place = await response.json();
                return place;
            } catch (err) {
                //console.log(err);
            }
        } else {
            try {
                response = await fetch(
                    `https://api.openweathermap.org/geo/1.0/direct?q=${location},US&limit=1&appid=07635fa17157cfd961af367e15eeb273`,
                    { mode: "cors" }
                );
                place = await response.json();
                return place[0];
            } catch (err) {
                //console.log(err);
            }
        }
    } catch (err) {
        //console.log(err);
    }
}

export { weatherSearch };
