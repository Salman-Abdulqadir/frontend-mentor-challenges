const api_url = "https://api.adviceslip.com/advice";

//DOM elements
const advice_id = document.querySelector("#advice-id");
const advice_content = document.querySelector("#advice-content");
const generate_btn = document.querySelector("#generate-btn");

//action listners
generate_btn.addEventListener("click", () => {
  show_advice();
});

// function that fetches data from the api
const fetch_advice = async () => {
  try {
    const data = await fetch(api_url);
    const result = await data.json();
    return result.slip;
  } catch (err) {
    console.log(err);
  }
};

//displaying the data in the containers
const show_advice = async () => {
  const data = await fetch_advice();
  advice_id.innerText = data.id ? `Advice #${data.id}` : "Advice #";
  advice_content.innerText = data.advice
    ? `"${data.advice}"`
    : "Something went wrong! check your internet connection";
};
