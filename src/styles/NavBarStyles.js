import styled from "@emotion/styled";

export const NavBarStyles = styled.div`
    max-width: 400px;
    width: 10%;
    height: 20%;
    color: #ffffff;
    box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 5em;
    right: 0;
    z-index: 200;
    background: black;

    .nav-ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .route-nav li {
        padding: 15px 5px;
        text-align: center;
    }

    .nav-link {
        color: #ffffff;
        text-decoration: none;
        font-size: 25px;
    }

    .nav-link:hover {
        color: blue;
    }

    .nav-link:active {
        color: yellow;
    }

    @media all and (max-width: 767px) {
        height: 300px;
        width: 150px;
    }
`;
