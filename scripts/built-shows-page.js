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

/*
Date
"Mon Sept 06 2021",
"Tue Sept 21 2021",
"Fri Oct 15 2021",
"Sat Nov 06 2021",
"Fri 26 2021",
"Wed Dec 15 2021",
*/

/*
Venue
"Ronald Lane",
"Pier 3 East",
"View Lounge",
"Hyatt Agency",
"Moscow Center",
"Press Club"
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

let ticketTitle = document.createElement("h2");
ticketTitle.classList.add("ticket__title")
ticketTitle.innerText = "Shows";

ticketSection.appendChild(ticketTitle)

for (i = 0; i < showsArray.length; i++) {
  let shows = showsArray[i];

  let ticketContainer = document.createElement("div");
  ticketContainer.classList.add("ticket-container");

  let ticketSubtitle = document.createElement("h3");
  ticketSubtitle.classList.add("ticket__subtitle");
  ticketSubtitle.innerText = "Date";

  let ticketDescription = document.createElement("p");
  ticketDescription.classList.add("ticket__description");
  ticketDescription.innerText = shows.date;

  let ticketVenue = document.createElement("h3");
  ticketVenue.classList.add("ticket__subtitle");
  ticketVenue.innerText = "Venue";

  let ticketVenueName = document.createElement("p");
  ticketVenueName.classList.add("ticket__description");
  ticketVenueName.innerText = shows.venue;

  let ticketLocation = document.createElement("h3");
  ticketLocation.classList.add("ticket__subtitle");
  ticketLocation.innerText = "Location";

  let ticketLocationName = document.createElement("p");
  ticketLocationName.classList.add("ticket__description");
  ticketLocationName.innerText = shows.location;
  
  let btn = document.createElement("button")
  btn.classList.add("ticket__btn")
  btn.innerText = "Buy Tickets"

  ticketSection.appendChild(ticketContainer);
  ticketContainer.appendChild(ticketSubtitle);
  ticketContainer.appendChild(ticketDescription);
  ticketContainer.appendChild(ticketVenue);
  ticketContainer.appendChild(ticketVenueName);
  ticketContainer.appendChild(ticketLocation);
  ticketContainer.appendChild(ticketLocationName);
  ticketContainer.appendChild(btn)
}






