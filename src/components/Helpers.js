import axios from "axios";
/**
 * This file contains the helper functions used in the App
 * fetchAPIData, timeConverter and sortByTime used in the MainPage.js file
 */

// Fetching JSONP API data
export const fetchAPIData = async url => {
    const { data } = await axios(url);

    // Convert JSONP data to JSON
    const editedData = data.substring(data.indexOf("(") + 1, data.lastIndexOf(")"));
    const parsedData = JSON.parse(editedData);
    const realData = parsedData.features;

    return realData;
};

// Timestamp converter
export const timeConverter = time => {
    // Will display time in UTC format (Sun, 17 Nov 2019 18:36:31 GMT)
    return new Date(time).toUTCString();
};

// Sort weather data by time
export const sortByTime = property => {
    return async function(a, b) {
        const first = await a.properties[property];
        const second = await b.properties[property];

        return first - second;
    };
};
