import { createGlobalStyle } from "styled-components";

export const lightTheme={
    color: "hsl(0,0,97%)"
}
export const darkTheme = {
  color: "hsl(207, 26%, 17%)",
};
export default createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        transition: all 0.3s ease;
    }
    input, button, select{
        font-family: inherit;
    }
    img{
        display: block;
        max-width: 100%;
    }
    body{
        background-color: ${props=> props.theme.color};
        font-family: 'Nunito Sans', sans-serif;
    }
    button, input, select{
        padding: 0.5rem 1rem;
        background-color: white;
        border: 1px solid hsl(0, 0%, 90%);
        cursor: pointer;
        transition: background 0.3s ease;
    }
    button:hover{
        background-color: hsl(0, 0%, 90%);
    }
    .flex{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 1rem;
    }
    .loading{
        text-align: center;
        img{
            mix-blend-mode: multiply;
            margin: auto;
        }
    }
    .dark-mode{
        background-color: hsl(207, 26%, 17%);
        .dark-element, .details-page button, .country-card{
            background-color: hsl(209, 23%, 22%);
            border: none;
            box-shadow: none;
            *{
                color: white;
            }
        }
        .details-page{
            background-color: hsl(207, 26%, 17%);
            color: white;
            button{
                color: white !important;
            }
        }
        .select-field select {
            background-color: hsl(209, 23%, 22%);
            border: none;
        }
    }
`;
