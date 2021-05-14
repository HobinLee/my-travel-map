import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}

    * {
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
    ::-webkit-scrollbar-thumb {
        background: #7A93A7;
        border-radius: 4px;
    }
    /* width */
    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #ECEFF2;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #406380;
    }
`

export default GlobalStyle;