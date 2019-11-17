import React, { useState } from "react";
import useDeepCompareEffect from "use-deep-compare-effect";
import Header from "./Header";
import Output from "./Output";
import ErrorComp from "./ErrorComp";
import { fetchAPIData, sortByTime } from "./Helpers";
import { MainPageStyles } from "../styles/MainPageStyles";

function MainPage() {
    const [weatherData, setWeatherData] = useState([]);
    const [queryWeatherData, setQueryWeatherData] = useState([]);
    const [userSearch, setUserSearch] = useState("");
    const [error, setError] = useState({ message: "" });

    // useDeepCompareEffect is used in place of useEffect in order to avoid multiple API calls
    useDeepCompareEffect(() => {
        getWeatherData(weatherData);
    }, [weatherData]);

    // Fetch employees data from the API
    const getWeatherData = async () => {
        const url = `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojsonp`;

        try {
            const data = await fetchAPIData(url);

            setWeatherData(data);
        } catch (e) {
            setError(e);
        }
    };

    //Search weather data using part of city name
    const searchByCity = userInput => {
        let result;

        if (userInput && error.message.length === 0) {
            result = weatherData.filter(item =>
                item.properties.place.toLowerCase().includes(userInput.toLowerCase())
            );

            // Checking if the search parameter doesn't exist
            result.length === 0
                ? setError({
                      message:
                          "Search parameter doesn't exist, please enter a new value or delete the entered value and press enter",
                  })
                : setQueryWeatherData(result);
        } else {
            setQueryWeatherData([]);
            setError({ message: "" });
        }
    };

    // Sorting by date created
    const handleSortByCreatedTime = () => {
        const newData = weatherData.sort(sortByTime("time"));
        setQueryWeatherData(newData);
    };

    // Handler for user input query search
    const handleQueryInputChange = event => {
        const { value } = event.target;
        setUserSearch(value);
    };

    // Input search submit handler
    const handleSubmit = event => {
        event.preventDefault();
        searchByCity(userSearch);
    };

    return (
        <MainPageStyles>
            <Header
                pageTitle="MainPage"
                value={userSearch}
                onChange={handleQueryInputChange}
                onSubmit={handleSubmit}
            />

            {error.message.length !== 0 ? (
                <ErrorComp data={error} />
            ) : (
                <div className="contain">
                    <div className="sorter-div">
                        <span className="sorter-label">Sort By</span>
                        <button className="sorter-button" onClick={handleSortByCreatedTime}>
                            Time created
                        </button>
                        <div className="sorter-spacer" />
                        <div className="sorter-spacer" />
                    </div>
                    <div className="content-details">
                        {error.message.length === 0 && queryWeatherData.length !== 0 ? (
                            <Output data={queryWeatherData} />
                        ) : (
                            <Output data={weatherData} />
                        )}
                    </div>
                </div>
            )}
        </MainPageStyles>
    );
}

export default MainPage;
