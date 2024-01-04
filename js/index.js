console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

const newArticle = document.createElement("article");
document.body.append(newArticle);
newArticle.classList.add("post");

const newParagraph = document.createElement("p");
newArticle.append(newParagraph);
newParagraph.classList.add("post__content");
newParagraph.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

const newFooter = document.createElement("footer");
newArticle.append(newFooter);
newFooter.classList.add("post__footer");

const newSpan = document.createElement("span");
newFooter.append(newSpan);
newSpan.classList.add("post__username");
newSpan.textContent = "@username";

const newButton = document.createElement("button");
newFooter.append(newButton);
newButton.classList.add("post__button");
newButton.textContent = "♥ Like";

newButton.addEventListener("click", handleLikeButtonClick);

//<button type="button" class="post__button" data-js="like-button">
//  ♥ Like
//</button>

// Exercise:
// Use document.createElement() and append another social media post
// to the body.

//This page shows an example of a social media post. Your task is to
//replicate the social media post with JavaScript.
//Use `document.createElement()` to generate all HTML elements
//separately.

//Don't use `.innerHTML` to create the HTML in one instance, but use
//multiple calls of `document.createElement()` instead.

//The `index.html` demonstrates the required HTML tags, structure and
// class names.

//Append the second social media post to the body. Don't forget to
//add
//the event listener to the like button. You can use the function
//`handleLikeButtonClick` for the event listener.
