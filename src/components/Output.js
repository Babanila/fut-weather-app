import React from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
import Loading from "./Loading";
import { timeConverter } from "./Helpers";
import { OutputStyles } from "../styles/OutputStyles";

const Output = ({ data }) => {
    return data.map((item, i) => (
        <LazyLoad key={item.id} placeholder={<Loading />}>
            <Link to={`city/${item.id}`} key={item.id} id="link-cols">
                <OutputStyles className="card">
                    <picture className="card-picture">
                        <img src="https://wallpaperbro.com/img/438821.jpg" alt="weather" />
                    </picture>
                    <div className="card-content">
                        <div className="content-location">
                            <h3 data-setid="item-title">{item.properties.title}</h3>
                        </div>
                        <p className="card-section">
                            <span className="content-key">Type: </span>
                            <span className="content-value">{item.properties.type} </span>
                        </p>
                        <p>
                            <span className="content-key">Time: </span>
                            <span className="content-value">
                                {timeConverter(item.properties.time)}
                            </span>
                        </p>
                        <p>
                            <span className="content-key">Updated: </span>
                            <span className="content-value">
                                {timeConverter(item.properties.updated)}
                            </span>
                        </p>
                        <p>
                            <span className="content-key">RMS: </span>
                            <span className="content-value">{item.properties.rms} </span>
                        </p>
                        <p>
                            <span className="content-key">Dmin: </span>
                            <span className="content-value">
                                {item.properties.dmin || "Not available"}
                            </span>
                        </p>
                        <p>
                            <span className="content-key">MagType: </span>
                            <span className="content-value">{item.properties.magType} </span>
                        </p>
                    </div>
                </OutputStyles>
            </Link>
        </LazyLoad>
    ));
};

export default Output;
