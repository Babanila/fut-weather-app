import styled from "@emotion/styled";

export const OutputStyles = styled.div`
    width: 270px;
    margin: 1rem 1rem 1rem 1rem;
    background: #f6f6f6;
    border: 1px solid #f6f6f6;
    &: hover {
        border: 1px solid blue;
    }

    #link-cols {
        color: #000000;
        text-decoration: none;
    }

    img {
        display: block;
        border: 0;
        width: 100%;
        height: auto;
    }

    .card-content {
        padding: 1.4em;
    }

    .content-section {
        font-size: 1.5rem;
    }
    .content-key {
        color: black;
        font-weight: bold;
    }

    .content-value {
        color: blue;
    }
`;
