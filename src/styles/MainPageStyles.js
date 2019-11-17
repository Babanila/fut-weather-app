import styled from "@emotion/styled";

export const MainPageStyles = styled.div`
    width: 100%;
    .error-contain {
        width: 50%;
        height: auto;
        margin: 0 auto;
        margin-top: 10em;
        padding: 0 auto;
        font-size: 2rem;
        color: red;
        text-align: center;
        border: 2px solid #000000;
    }

    .contain {
        width: 100%;
        background-color: #ffffff;
        max-width: 1500px;
        margin-left: auto;
        margin-right: auto;
    }

    #link-cols {
        color: #000000;
        text-decoration: none;
    }

    .content-details {
        margin-top: 9em;
        width: 100%;
        align-items: center;
        background-color: white;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
    }

    .sorter-div {
        width: 100%;
        height: 9%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        background-color: #ffffff;
        margin: 0 auto;
        position: fixed;
        top: 4.8em;
        left: 0;
        z-index: 95;

        h3 {
            color: red;
        }

        .sorter-label {
            text-align: center;
            font-size: 1rem;
            font-weight: bold;
            margin-right: 1em;
            color: blue;
        }

        .sorter-button {
            min-width: 5%;
            height: 60%;
            text-align: center;
            font-size: 0.8rem;
            font-weight: bold;
            border: 1px solid gray;
            border-radius: 5px;
            padding: 2px;
            background-color: gray;
            margin-bottom: 0px;
            color: #ffffff;
            &:hover {
                cursor: pointer;
                border: 1px solid #9bc2e5;
                background-color: #192661;
            }
        }

        .sorter-spacer {
            width: 2%;
            height: 50%;
            text-align: center;
        }
    }

    h2 {
        font-size: 26px;
        margin: 20px 0;
        text-align: center;
        small {
            font-size: 0.5em;
        }
    }

    @media (min-width: 250px) and (max-width: 467px) {
        .sorter-div {
            top: 3.5em;
        }
    }
`;
