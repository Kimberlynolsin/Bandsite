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
    date: "Fri 26 2021",
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
ticketSection.appendChild(ticketTitle);

const tablet = document.getElementsByClassName("ticket__subtitle--tablet")
ticketSection.appendChild(tablet)

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

// function select(x) {
//   const ticketCon = document.querySelectorAll(".ticket-container")[0];

//   if (ticketCon) {
//     ticketCon.className = "";
//   }

//   x.className = "ticket-container";
//   console.log(ticketCon);

//   ticketCon.addEventListener('click', select)
// }


