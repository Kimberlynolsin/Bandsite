const commentsArray = [
  {
    user: "Miles Acosta",
    date: "12/20/2020",
    comment:
      "I can t stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
  {
    user: "Emilie Beach",
    date: "01/09/2021",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    user: "Connor Walton",
    date: "02/17/2021",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
];

const comments = document.querySelector(".comment");

const commentTitle = document.createElement("h2");
commentTitle.classList.add("comment__title");
commentTitle.innerText = "Join the Conversation";

const inputField = document.querySelector(".comment__form");

comments.prepend(inputField);
comments.prepend(commentTitle);

const commentSection = document.querySelector(".commentSection");

const displayComment = (text) => {
  const commentContainer = document.createElement("div");
  commentContainer.classList.add("comment-container");

  const commentPlaceholder = document.createElement("div");
  commentPlaceholder.classList.add("comment__placeholder");

  const commentTimestamp = document.createElement("div");
  commentTimestamp.classList.add("comment__timestamp");

  const commentName = document.createElement("p");
  commentName.classList.add("comment__name");
  commentName.innerText = text.user;

  const commentDate = document.createElement("p");
  commentDate.classList.add("comment__date");
  commentDate.innerText = text.date;

  const pDiv = document.createElement("div");
  pDiv.classList.add("comment__para");

  const comment = document.createElement("p");
  comment.classList.add("p");
  comment.innerText = text.comment;

  pDiv.appendChild(comment);
  commentName.appendChild(pDiv);
  commentTimestamp.appendChild(commentName);
  commentTimestamp.appendChild(commentDate);
  commentContainer.appendChild(commentPlaceholder);
  commentContainer.appendChild(commentTimestamp);

  commentSection.prepend(commentContainer);
};

for (i = 0; i < commentsArray.length; i++) {
  displayComment(commentsArray[i]);
}

const submitBtn = document.getElementById("submit");
const formButton = document.getElementById("formId");

formButton.addEventListener("submit", (event) => {
  event.preventDefault();

  const newUserName = event.target.name.value;
  const newUserComment = event.target.comment.value;
  const currentDate = new Date()

  const newText = {
    user: newUserName,
    date: currentDate.toLocaleDateString("en-US"),
    comment: newUserComment,
  };

  displayComment(newText);
});
