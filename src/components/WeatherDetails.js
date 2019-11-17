import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import useDeepCompareEffect from "use-deep-compare-effect";
import Header from "./Header";
import ErrorComp from "./ErrorComp";
import { fetchAPIData, timeConverter } from "./Helpers";
import { WeatherDetailsStyles } from "../styles/WeatherDetailsStyles";

function WeatherDetails(props) {
    const { id } = props.match.params;

    const [weatherDetails, setWeatherDetails] = useState({});
    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState({ message: "" });

    // useDeepCompareEffect is used in place of useEffect in order to avoid multiple API calls
    useDeepCompareEffect(() => {
        getWeatherDetails(id);
    }, [weatherDetails]);

    // Fetch data from the API
    const getWeatherDetails = async id => {
        const url = `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojsonp`;

        try {
            const data = await fetchAPIData(url);

            // Filter data from using the ID
            const singleItem = getItem(data, id);
            setWeatherDetails(singleItem[0]);
        } catch (e) {
            setError(e);
        }
    };

    // Get item by ID
    const getItem = (items, itemId) => items.filter(item => item.id === itemId);

    // Handler to Main page or root
    const handleBack = event => {
        event.preventDefault();
        setRedirect(true);
    };

    // Output handler
    const showWeatherDetails = item => (
        <div className="root-details">
            {Object.entries(item).map(([k, value], i) => {
                // Replacing null value with null string
                if (value == null) value = "null";

                // Converting the time to UTC
                if (k === "time" || k === "updated") value = timeConverter(value);

                return value && typeof value !== "object" ? (
                    <div key={i} className="details" data-label={k}>
                        <span className="outer-details">{k}:</span>
                        <span className="inner-details">{value}</span>
                    </div>
                ) : (
                    <div key={i} className="details" data-label={k}>
                        <span className="outer-details2">{k}:</span>
                        <span className="inner-details2">{showWeatherDetails(value)}</span>
                    </div>
                );
            })}
        </div>
    );

    return (
        <WeatherDetailsStyles className="table-row">
            <Header className="details-header" pageTitle="Weather Details" />
            <div className="weather-h2">
                <h2>The full details</h2>
            </div>
            {error.message.length !== 0 ? (
                <ErrorComp data={error} />
            ) : Object.keys(weatherDetails).length === 0 ? (
                <div className="data-loading"> Loading ...</div>
            ) : redirect ? (
                <Redirect to={`/`} />
            ) : (
                showWeatherDetails(weatherDetails)
            )}
            <div className="button-group">
                <button className="back-button" onClick={handleBack}>
                    Back
                </button>
            </div>
        </WeatherDetailsStyles>
    );
}

export default WeatherDetails;
