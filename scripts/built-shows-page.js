const BASE_API_URL = "https://project-1-api.herokuapp.com/";
const API_KEY = "ff4056ef-f943-4b2a-8042-5ac5024141c4";

const param = "showdates";

const url = `${BASE_API_URL}${param}?api_key=${API_KEY}`;

axios.get(url).then((results) => {
  const showsArray = results.data;
  const showsData = showsArray[0];
  const showsVenue = showsData.place;
  const showsLocation = showsData.location;

  //Mon Sep 06 2021 00:00:00 GMT-0400 (Eastern Daylight Time)

  let objectDate = new Date(showsData.date).toDateString();

  console.log(objectDate);

  let ticketSection = document.querySelector(".ticket");

  let createElementWithClass = (type, className, text, container) => {
    let element = document.createElement(type);
    element.classList.add(className);
    element.innerText = text;

    container.appendChild(element);
  };

  let ticketTitle = document.createElement("h2");
  ticketTitle.classList.add("ticket__title");
  ticketTitle.innerText = "Shows";
  ticketSection.prepend(ticketTitle);

  for (i = 0; i < showsArray.length; i++) {
    let show = showsArray[i];
    console.log(show);
    let ticketContainer = document.createElement("div");
    ticketContainer.classList.add("ticket-container");

    createElementWithClass("h3", "ticket__subtitle", "Date", ticketContainer);
    createElementWithClass("p", "ticket__date", objectDate, ticketContainer);
    createElementWithClass("h3", "ticket__subtitle", "Venue", ticketContainer);
    createElementWithClass(
      "p",
      "ticket__description",
      show.place,
      ticketContainer
    );
    createElementWithClass(
      "h3",
      "ticket__subtitle",
      "Location",
      ticketContainer
    );
    createElementWithClass(
      "p",
      "ticket__description",
      show.location,
      ticketContainer
    );
    createElementWithClass(
      "button",
      "ticket__btn",
      "Buy Tickets",
      ticketContainer
    );

    ticketSection.appendChild(ticketContainer);
  }

  const changeColor = document.querySelectorAll(".ticket-container");
  console.log(changeColor);

  let previouslyClickedElement = undefined;

  const handler = (event) => {
    if ("ticket__btn" === event.target.className) return;

    if (previouslyClickedElement) {
      previouslyClickedElement.style.backgroundColor = "white";
    }

    let currentlyClickedTarget = event.currentTarget;
    currentlyClickedTarget.style.backgroundColor = "rgb(225,225,225)";

    previouslyClickedElement = currentlyClickedTarget;
  };

  changeColor.forEach((element) => {
    // console.log(element);
    element.addEventListener("click", handler);
  });
});
