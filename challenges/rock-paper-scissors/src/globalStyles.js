import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    img{
        max-width: 100%;
        display: block;
    }
    body{
        font-family: 'Barlow Semi Condensed', sans-serif;
        background: radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%)) ;
        overflow-x: hidden;
    }
    .flex, .flex-col{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 1.5rem;
    }
    .flex-col{
        flex-direction: column;
    }
    .App{
        min-height: 100vh;
        align-items: center;
        padding: 2rem;
    }
    .rules-btn{
        align-self: flex-end;
        cursor: pointer;
        color: white;
        font-family: inherit;
        font-size: 1rem;
        background: transparent;
        border: 1px solid white;
        padding: 0.5rem 2rem;
        border-radius: 5px;
        @media screen and (max-width: 500px) {
            align-self: center;
        }
    }
`;