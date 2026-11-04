import React, { useRef, useState } from "react";
import styled from "styled-components";

import axios from "axios";

import shorten_bg from "../images/bg-shorten-desktop.svg";

const Shorten = ({ links, setLinks }) => {
  const [isEmpty, setIsEmpty] = useState(false);

  //using reference to access input text
  const inputRef = useRef(null);

  const shortenLink = async () => {
    try {
      const original_link = inputRef.current.value;
      //checking if the original link is empty
      if (!original_link || /^ *$/.test(original_link)) {
        setIsEmpty(true);
        return;
      }
      setIsEmpty(false);

      //using axios to fetch the shortened link from the api
      const response = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${original_link}/very/long/link.html`
      );

      //getting the shortend link and adding it to the list of shortened lists
      const shortend_link = response.data.result.full_short_link;
      setLinks([...links, { original_link, shortend_link }]);

      //clearing the input field
      inputRef.current.value = "";
    } catch {
      console.log("unsuccessful fetch!");
    }
  };
  return (
    <StyledShorten>
      <div className="shorten-input flex">
        <input
          className={isEmpty ? "invalid-input" : ""}
          ref={inputRef}
          type="text"
          placeholder="Shorten a link here..."
        />
        <button onClick={shortenLink} className="btn">
          Shorten it!
        </button>
      </div>
      <p className="shorten-error">{isEmpty ? "Please add a link!" : ""}</p>
    </StyledShorten>
  );
};

export const StyledShorten = styled.div`
  background-image: url(${shorten_bg});
  background-color: hsl(257, 27%, 26%);
  padding: 3rem;
  width: 80%;
  margin: auto;
  border-radius: 10px;
  input {
    flex: 5;
    width: 100%;
    border-radius: 7px;
    font-family: inherit;
    padding: 0.75rem 2rem;
  }
  .btn {
    flex: 1;
  }
  .btn,
  input {
    font-size: 1rem;
    min-width: fit-content;
  }
  .invalid-input {
    border: 2px solid hsl(0, 87%, 67%);
  }
  .shorten-error {
    color: hsl(0, 87%, 67%);
  }
`;

export default Shorten;
