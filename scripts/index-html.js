const BASE_API_URL = "https://project-1-api.herokuapp.com/";
const API_KEY = "ff4056ef-f943-4b2a-8042-5ac5024141c4";

const param = "comments";

const url = `${BASE_API_URL}${param}?api_key=${API_KEY}`;

const comments = document.querySelector(".comment");
const userCommentSection = document.querySelector(".user-comment");


let createElementWithClass = (type, className, text, container) => {
  let element = document.createElement(type);
  element.classList.add(className);
  element.innerText = text;

  container.appendChild(element);
};

const displayComment = (text) => {
  const commentContainer = document.createElement("div");
  commentContainer.classList.add("comment-container");

  const placeholder = document.createElement("div");
  placeholder.classList.add("comment__placeholder");

  const commentDetails = document.createElement("div");
  commentDetails.classList.add("comment__details");

  const commentDateContainer = document.createElement("div");
  commentDateContainer.classList.add("comment__date-container");

  const date = document.createElement("p");
  date.classList.add("comment__date");
  date.innerText = new Date(text.timestamp).toLocaleDateString("en-US");

  createElementWithClass("p", "comment__name", text.name, commentDetails);
  createElementWithClass("p", "comments", text.comment, commentDetails);

  commentContainer.appendChild(placeholder);
  commentContainer.appendChild(commentDetails);
  commentContainer.appendChild(commentDateContainer);
  commentDateContainer.appendChild(date);

  userCommentSection.appendChild(commentContainer);
};

createElementWithClass(
  "h2",
  "comment__title",
  "Join the Conversation",
  comments
);

const inputField = document.querySelector(".comment__form");
const newCommentSection = document.createElement("div");

comments.appendChild(inputField);
comments.appendChild(newCommentSection);

function getComments() {
  axios
    .get(url)
    .then((results) => {
      const dataArr = results.data;

      dataArr.sort((a, b) => {
        return b.timestamp - a.timestamp;
      });

      userCommentSection.innerHTML = " ";

      dataArr.forEach((element) => {
        displayComment(element);
      });
    })
    .catch((error) => {
      console.log(`You have a ${error}`);
    });
}


getComments();

const formButton = document.getElementById("formId");

formButton.addEventListener("submit", (event) => {
  event.preventDefault();

  const newUserName = event.target.name.value;
  const newUserComment = event.target.comment.value;

  const newText = {
    name: newUserName,
    comment: newUserComment,
  };
  document.getElementById("formId").reset();

  axios
    .post(url, newText)
    .then((results) => {
      console.log(results);

      getComments();
    })
    .catch((error) => {
      console.log(error);
    });
});
