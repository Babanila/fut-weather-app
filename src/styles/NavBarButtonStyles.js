import styled from "@emotion/styled";

export const NavBarButtonStyles = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 24px;
    width: 30px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    box-sizing: border-box;

    &::focus {
        outline: none;
    }

    .button-line {
        width: 30px;
        height: 2px;
        background: white;
    }
`;

export const NavBarDropStyles = styled.div`
    position: fixed;
    top: 5em;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 150;
`;
