/*

<section class="comments">
<h2 class="comments__title">Join the Conversation</h2>
<div class="comments__container">


</div>
</section>

*/

const commentsArray = [
  {
    user: "Connor Walton",
    date: "02/17/2021",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    user: "Emilie Beach",
    date: "01/09/2021",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    user: "Miles Acosta",
    date: "12/20/2020",
    comment:
      "I can t stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];



const comments = document.querySelector(".comment");

const commentTitle = document.createElement("h2");
commentTitle.classList.add("comment__title");
commentTitle.innerText = "Join the Conversation";

const inputField = document.querySelector(".comment__form")

comments.appendChild(commentTitle);
comments.appendChild(inputField)

/*
//////////////////////////////////////
 what do we need in the function?
1. We need to extract comment from commentsArray 
 - (commentsArray[i])

//////////////////////////////////////

2. we need to stick it into section
a) create a div
- const div = document.createElement("div") 
- div.classList.add("div__comment")

b)stick it into the existing div
- comments.appendChild(div)


*/



const displayComment = (text) =>{
    //create div and add class to it 
    const commentContainer = document.createElement("div")
    commentContainer.classList.add("comment-container")
    
    const commentPlaceholder = document.createElement("div")
    commentPlaceholder.classList.add("comment__placeholder")

    const commentTimestamp = document.createElement("div")
    commentTimestamp.classList.add("comment__timestamp")
    
    const commentName = document.createElement("p")
    commentName.classList.add("comment__name")
    commentName.innerText = text.user

    
    const commentDate = document.createElement("p")
    commentDate.classList.add("comment__date")
    commentDate.innerText = text.date

    const pDiv = document.createElement("div")
    pDiv.classList.add("comment__para")

    const comment = document.createElement("p")
    comment.classList.add("p")
    comment.innerText = text.comment

    commentContainer.appendChild(commentPlaceholder)
    comments.appendChild(commentContainer)

    commentContainer.appendChild(commentTimestamp)
    
    commentTimestamp.appendChild(commentName)
    commentTimestamp.appendChild(commentDate)
    commentName.appendChild(pDiv)
    pDiv.appendChild(comment)
}


for(i = 0; i < commentsArray.length; i++){
    displayComment(commentsArray[i])
}





