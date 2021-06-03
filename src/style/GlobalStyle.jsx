import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    :root[color-theme='light'] {
        --backgroundColor: #fff;
        --textColor: #333;
        --pointColor: #666396;
        --defaultColor: #e4e4ed;
        --highlightColor: #566D85;
        --visitColor: orange;
        --bucketColor: skyblue;
        --modalColor: #fff;
    }
    
    :root[color-theme='dark'] {
        --backgroundColor: #333;
        --textColor: #fff;
        --pointColor: #d9b58f;
        --defaultColor: #695e56;
        --highlightColor: #a8a19d;
        --visitColor: orange;
        --bucketColor: skyblue;
        --modalColor: #555;
    }

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
        background: var(--highlightColor);
        border-radius: 4px;
    }
    /* width */
    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: var(--defaultColor);
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: var(--pointColor);
    }

    ::placeholder{
        color: var(--pointColor);
    }

    li, span {
        font-family: 'Roboto Slab', serif;
    }
    
`

export default GlobalStyle;