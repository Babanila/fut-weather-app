import styled from "@emotion/styled";

export const WeatherDetailsStyles = styled.div`
    min-width: 320px;
    margin-top: 8em;
    overflow: hidden;

    .details-header {
        width: 100%;
    }

    .weather-h2 {
        width: 100%;
        height: 70px;
        position: fixed;
        top: 3.5em;
        left: 0;
        background: white;
        font-size: 1.2rem;
    }

    .root-details {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-self: flex-start;
        justify-content: center;
        align-content: center;
        color: black;

        .details {
            width: 100%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            color: black;
            font-size: 1.3rem;
            font-family: "Noe Display";
            font-weight: bold;
            padding: 0.5em;

            .outer-details {
                margin-left: 0;
            }

            .inner-details {
                margin-left: 1em;
                color: blue;
            }

            .outer-details2 {
                color: black;
            }

            .inner-details2 {
                color: blue;
                margin-top: 1em;
                margin-left: -3em;
            }
        }
    }

    .button-group {
        width: 80%;
        display: flex;
        flex-direction: row;
        margin: 0 auto;
        background-color: #ffffff;
        font-size: 20px;
        justify-content: center;
        margin-top: 2em;

        .back-button {
            min-width: 60px;
            background-color: black;
            color: #ffffff;
            font-size: 20px;
            align-self: center;
            border-radius: 5px;
            padding: 10px;
            margin-left: 1em;
            &:hover {
                cursor: pointer;
                background-color: red;
            }
        }
    }

    .data-loading {
        width: 80%;
        height: 50%;
        margin: 0 auto;
        margin-top: 5em;
        padding: 0 auto;
        font-size: 2rem;
        color: #000000;
        text-align: center;
    }

    @media (min-width: 468px) and (max-width: 767px) {
        .weather-h2 {
            height: 50px;
            top: 5em;
            left: 0;
            font-size: 1rem;
        }

        .root-details {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            .details {
                width: 100%;
                color: black;
                font-size: 1rem;

                .outer-details {
                    margin-left: 0;
                }

                .inner-details {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    margin-left: 0.3em;
                    font-size: 1rem;
                    color: blue;
                }

                .outer-details2 {
                    color: black;
                }

                .inner-details2 {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    color: blue;
                    margin-top: 0.5em;
                    margin-left: 0em;
                    font-size: 0.8rem;
                }
            }
        }
    }

    @media (min-width: 300px) and (max-width: 467px) {
        width: 100%;
        margin-top: 4.3em;
        margin-left: -0.5em;
        overflow: hidden;
        background: white;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        .weather-h2 {
            height: 40px;
            top: 3em;
            left: 0;
            font-size: 0.7rem;
        }

        .root-details {
            .details {
                width: 100%;
                color: black;
                font-size: 1rem;

                .outer-details {
                    margin-left: 0;
                }

                .inner-details {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    margin-left: 0.3em;
                    font-size: 1rem;
                    color: blue;
                }

                .outer-details2 {
                    color: black;
                }

                .inner-details2 {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    color: blue;
                    margin-top: 0.5em;
                    margin-left: 0em;
                    font-size: 0.8rem;
                }
            }
        }
    }
`;
