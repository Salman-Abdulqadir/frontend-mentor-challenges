import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    img, svg{
        display: block;
        max-width: 100%;
    }
    body{
        font-family: 'Poppins', sans-serif;
        overflow-x: hidden;
    
    }
    ul{
        list-style: none;
    }
    ul li, img{
        cursor: pointer;
        &:hover{
            color: hsla(180, 66%, 49%, 1);
        }
    }
    h2{
        font-size: 3rem;
    }
    p{
        color: hsl(0, 0%, 75%);
    }
    footer{
        background-color: hsl(260, 8%, 14%);
        color: white;
    }
    .flex{
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        align-items: center;
        justify-content: space-between;
    }
    .btn{
        border: none;
        cursor: pointer;
        padding: 0.75rem 2rem;
        background-color: hsla(180, 66%, 49%, 1);
        font-family: inherit;
        font-weight: 500;
        color: white;
        transition: all 0.3s ease;
        &:hover{
            background-color: hsla(180, 66%, 49%, 0.5);
            color: white;
        }
        border-radius: 8px;
    }
    .round-btn{
        border-radius: 20px;
    }
    .white-btn{
        background: transparent;
        color: black;
    }
    .dark-btn{
        background-color: hsl(260, 8%, 14%);
        color: white;
        &:hover{
            background-color: hsla(260, 8%, 14%,0.5);
        }
    }
`;

export default GlobalStyles;