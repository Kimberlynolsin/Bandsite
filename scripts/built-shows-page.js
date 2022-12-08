/*
    <section class="tickets">
      <h2 class="tickets__title">Shows</h2>
      <div class="tickets-container">
        <h3 class="tickets__sub">Date</h3>
        <p class="tickets__description">Mon sept 06 2021</p>
         <h3 class="tickets__sub">Venue</h3>
        <p class="tickets__description">Ronald Lane</p>
        <h3 class="tickets__sub">Location</h3>
        <p class="tickets__description">San Fransisco, CA</p>
        <button class="tickets__btn"></button>
      </div>
    </section>
*/

const showsArray = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco",
  },
  {
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco",
  },
  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco",
  },
  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco",
  },
  {
    date: "Fri 26 2021",
    venue: "Moscow Center",
    location: "San Francisco",
  },
  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco",
  },
];

let ticketSection = document.querySelector(".ticket");

// The function accepts: the type of element to create, the class to add, the text to use, the container to add the element to
let createElementWithClass = (type, className, text, container) => {
  // Create the specified element
  let element = document.createElement(type);
  element.classList.add(className);
  element.innerText = text;

  // Add the newly created element to the container provided
  container.appendChild(element)
};

// Create the title
let ticketTitle = document.createElement("h2");
ticketTitle.classList.add("ticket__title");
ticketTitle.innerText = "Shows";
ticketSection.appendChild(ticketTitle);

// Loop of shows
for (i = 0; i < showsArray.length; i++) {
  // Create a variable for the individual show in this current loop
  let show = showsArray[i];

  // Create a container, in this loop, and give it to the function below
  let ticketContainer = document.createElement("div");
  ticketContainer.classList.add("ticket-container")

  // Add a h3, and add it to the container
  createElementWithClass("h3", "ticket__subtitle", "Date", ticketContainer);

  // Same as above
  createElementWithClass("p", "ticket__description", show.date, ticketContainer);
  createElementWithClass("h3", "ticket__subtitle", "Venue", ticketContainer);
  createElementWithClass("p", "ticket__description", show.venue, ticketContainer);
  createElementWithClass("h3", "ticket__subtitle", "Location", ticketContainer);
  createElementWithClass("p", "ticket__description", show.location, ticketContainer);
  createElementWithClass("button", "ticket__btn", "Buy Tickets", ticketContainer);

  // Add the container with all the elmenets to the section
  ticketSection.appendChild(ticketContainer);
}
