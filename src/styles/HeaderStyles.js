import styled from "@emotion/styled";

export const HeaderStyles = styled.div`
    margin-top: 0;
    min-width: 300px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    background-color: black;
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 150;
    overflow: hidden;

    .logo-div {
        margin-left: 0;
        padding-left: 1em;
    }

    .title-div {
        margin-left: 2em;
        margin: 0 auto;
    }

    .group-addon {
        width: 30%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-right: 1rem;
    }

    @media (min-width: 468px) and (max-width: 767px) {
        margin-left: 0;
        .group-addon {
            width: 10%;
        }
    }

    @media (min-width: 300px) and (max-width: 467px) {
        margin-left: 0;
        .logo-div {
            width: 10%;
            padding-left: 0em;
            h1 {
                font-size: 0.8rem;
            }
        }

        .title-div {
            margin: 0 auto;
            h2 {
                font-size: 1rem;
            }
        }

        .group-addon {
            width: 10%;
        }
    }
`;
