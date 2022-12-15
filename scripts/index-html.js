const BASE_API_URL = "https://project-1-api.herokuapp.com/";
const API_KEY = "ff4056ef-f943-4b2a-8042-5ac5024141c4";

const param = "comments";

const url = `${BASE_API_URL}${param}?api_key=${API_KEY}`;

axios
  .get(url)
  .then((results) => {
    const data = results.data;
    const dataName = data[0].name;
    const dataDate = data[0].timestamp;
    const dataComment = data[0].comment;

    console.log(dataName, dataDate, dataComment);

    const comments = document.querySelector(".comment");

    const commentTitle = document.createElement("h2");
    commentTitle.classList.add("comment__title");
    commentTitle.innerText = "Join the Conversation";

    const inputField = document.querySelector(".comment__form");

    const newCommentSection = document.createElement("div");
    newCommentSection.classList.add("comment__section");

    comments.appendChild(commentTitle);
    comments.appendChild(inputField);
    comments.appendChild(newCommentSection);

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
      name.innerText = dataName;

      const date = document.createElement("p");
      date.classList.add("comment__date");
      date.innerText = text.date;

      const comment = document.createElement("p");
      comment.classList.add("comments");
      comment.innerText = text.comment;

      commentContainer.appendChild(placeholder);
      commentContainer.appendChild(commentDetails);
      commentDetails.appendChild(name);
      commentDateContainer.appendChild(date);
      commentContainer.appendChild(commentDateContainer);
      commentDetails.appendChild(comment);

      newCommentSection.prepend(commentContainer);
    };

    for (i = 0; i < data.length; i++) {
      displayComment(data[i]);
    }
    const submitBtn = document.getElementById("submit");
    const formButton = document.getElementById("formId");

    formButton.addEventListener("submit", (event) => {
      event.preventDefault();

      const newUserName = event.target.name.value;
      const newUserComment = event.target.comment.value;
      const currentDate = new Date();

      const newText = {
        user: newUserName,
        date: currentDate.toLocaleDateString("en-US"),
        comment: newUserComment,
      };

      data.push(newText);

      console.table(data);
      displayComment(newText);

      document.getElementById("formId").reset();
    });
  })
  .catch((error) => {
    console.log(error);
  });


