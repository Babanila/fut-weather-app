import styled from "@emotion/styled";

export const SearchStyles = styled.div`
    width: 85%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    .search-input {
        width: 12em;
        font-size: 1rem;
        padding: 5px;
        border: none;
    }

    .search-button {
        width: 4em;
        font-size: 1rem;
        padding: 5px;
        cursor: pointer;
        background-color: green;
        outline: none;
        border: none;
        color: white;
    }

    .search-button:hover {
        background-color: blue;
    }

    @media (min-width: 768px) and (max-width: 1042px) {
        .search-input {
            width: 6.8em;
        }
    }

    @media (min-width: 320px) and (max-width: 767px) {
        display: none;
    }
`;
