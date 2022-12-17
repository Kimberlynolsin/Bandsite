const BASE_API_URL = "https://project-1-api.herokuapp.com/";
const API_KEY = "ff4056ef-f943-4b2a-8042-5ac5024141c4";

const param = "showdates";

const url = `${BASE_API_URL}${param}?api_key=${API_KEY}`;

axios.get(url).then((results) => {
  const showsArray = results.data;

  let ticketSection = document.querySelector(".ticket");

  function format(timestamp) {
    const newDate = new Date(timestamp);

    return newDate.toDateString();
  }

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

    let ticketContainer = document.createElement("div");
    ticketContainer.classList.add("ticket-container");

    createElementWithClass("h3", "ticket__subtitle", "Date", ticketContainer);
    createElementWithClass(
      "p",
      "ticket__date",
      format(showsArray[i].date),
      ticketContainer
    );
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
});

setTimeout(() => {
  const changeColor = document.querySelectorAll(".ticket-container");

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
    element.addEventListener("click", handler);
  });
}, "2000");
