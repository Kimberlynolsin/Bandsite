const BASE_API_URL = "https://project-1-api.herokuapp.com/";
const API_KEY = "ff4056ef-f943-4b2a-8042-5ac5024141c4";

const param = "comments";

const url = `${BASE_API_URL}${param}?api_key=${API_KEY}`;

const comments = document.querySelector(".comment");
const kimmy = document.querySelector(".kimmy");

const displayComment = (text) => {
  const commentContainer = document.createElement("div");
  commentContainer.classList.add("comment-container");

  const placeholder = document.createElement("div");
  placeholder.classList.add("comment__placeholder");

  const commentDetails = document.createElement("div");
  commentDetails.classList.add("comment__details");

  const commentDateContainer = document.createElement("div");
  commentDateContainer.classList.add("comment__date-container");

  const name = document.createElement("p");
  name.classList.add("comment__name");
  name.innerText = text.name;

  const date = document.createElement("p");
  date.classList.add("comment__date");

  //formate date here
  date.innerText = text.timestamp;

  const comment = document.createElement("p");
  comment.classList.add("comments");
  comment.innerText = text.comment;

  commentContainer.appendChild(placeholder);
  commentContainer.appendChild(commentDetails);
  commentDetails.appendChild(name);
  commentDetails.appendChild(comment);
  commentContainer.appendChild(commentDateContainer);
  commentDateContainer.appendChild(date);

  kimmy.appendChild(commentContainer);
};

const commentTitle = document.createElement("h2");
commentTitle.classList.add("comment__title");
commentTitle.innerText = "Join the Conversation";

const inputField = document.querySelector(".comment__form");

const newCommentSection = document.createElement("div");

comments.appendChild(commentTitle);
comments.appendChild(inputField);
comments.appendChild(newCommentSection);

function getComments() {
  axios
    .get(url)
    .then((results) => {
      const dataArr = results.data;
      const dataUser = dataArr[0];
      const dataName = dataUser.name;
      const dataDate = dataUser.timestamp;

      const dataComment = dataUser.comment;

      const currentDate = new Date(dataDate).toDateString();
      console.log(currentDate);

      console.table(dataArr);

      //configure object timestamp to year month date

      console.log(currentDate);
      //connor,emily,miles

      dataArr.sort((a, b) => {
        return b.timestamp - a.timestamp;
      });

      kimmy.innerHTML = " ";


      //display comment function

      for (i = 0; i < dataArr.length; i++) {
        displayComment(dataArr[i]);
        //convert timestamp
      }
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
  console.log(newText);
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
