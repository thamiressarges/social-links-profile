import { createGlobalStyle } from "styled-components";
import cursor from '../assets/cursor.png';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        min-width: 100%;
        min-height: 100vh;
        background-color: ${({theme}) => theme.COLORS.GRAY_900};
        font-family: "Inter", sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }

    a:hover {
        background-color: ${({theme}) => theme.COLORS.GREEN};
        cursor: url(${cursor}), pointer;
        color: ${({theme}) => theme.COLORS.GRAY_900};
        font-weight: bold;
    }

`;