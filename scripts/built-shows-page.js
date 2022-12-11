const showsArray = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

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

  let ticketContainer = document.createElement("div");
  ticketContainer.classList.add("ticket-container");

  createElementWithClass("h3", "ticket__subtitle", "Date", ticketContainer);
  createElementWithClass("p", "ticket__date", show.date, ticketContainer);
  createElementWithClass("h3", "ticket__subtitle", "Venue", ticketContainer);
  createElementWithClass(
    "p",
    "ticket__description",
    show.venue,
    ticketContainer
  );
  createElementWithClass("h3", "ticket__subtitle", "Location", ticketContainer);
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
  console.log(element);
  element.addEventListener("click", handler);
});

