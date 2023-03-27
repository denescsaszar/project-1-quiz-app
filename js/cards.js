/*---------------------------------
  1. Toggle functionality
---------------------------------
## Tasks

### 1. Toggle functionality

You have successfully built your **card** component in your Quiz App. But currently the user
**can't** interact with it. Now we want to implement a toggle functionality for the bookmark and the
answer button.

> ❗️ All functionality applies to the first card and the first bookmark only. Applying the
> functionality to all cards and bookmarks will be discussed later in the bootcamp.

#### Bookmark button

The following acceptance criteria should be met for the bookmark button:

- When the user clicks the **bookmark icon** the **bookmark icon** should change it's visual state
  (e. g. another color or image)
- When the user clicks the **bookmark icon** again the **bookmark icon** should change to its former
  style
- The user can click on the bookmark endlessly and the bookmark will **toggle between both
  stylings**

> **Note:** Clicking on a bookmark icon will not yet cause the question to be displayed on the
> **favorites** page as well and this is **not** part of the exercise.

#### Answer button

The following acceptance criteria should be met for the answer button:

- When the user clicks on the **button** the **previously hidden** answer should be displayed
- When the user clicks this **button** again the answer is **hidden** again
- The user can click on this button endlessly and the answer will **either be displayed or hidden**
  after each click
- The **toggle** functionality should be applied by using a **class** which is named **"hidden"**
- If the user clicks on an answer button, we want the button to say **"hide answer"** when the
  answer is displayed and **"show answer"** when the answer is not displayed.

> **Note:** The **hidden** class is already defined in the **styles.css** file. You can use it to
> hide the answer.

## Hints

- You can use the **toggle** method to toggle between two classes
- You can use the **classList** property to add or remove classes
- You can use the **textContent** property to change the text of a button

## Useful links

- [classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
- [textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)
- [toggle](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)


*/

/*---------------------------------
  2. Toggle functionality
---------------------------------*/

/*---------------------------------
BOOKMARK
---------------------------------*/

const imgs = document.querySelectorAll('[data-js="bookmark-button"]');

for (let i = 0; i < imgs.length; i++) {
  const img = imgs[i];
  img.addEventListener("click", () => {
    // console.log("i was clicked: ", bookmarkButton);
    img.classList.toggle("selected");
    const isSelected = img.classList.contains("selected");
    // console.log(img.getAttribute("src"));
    if (isSelected) {
      img.setAttribute("src", "./assets/bookmark_filled.png");
    } else {
      img.setAttribute("src", "./assets/bookmark.png");
    }
  });
}

// document
//   .querySelectorAll('[data-js="bookmark-button"]')
//   .forEach((bookmarkButton) => {
//     // console.log(bookmarkButton);
//     bookmarkButton.addEventListener("click", () => {
//       // console.log("i was clicked: ", bookmarkButton);
//       bookmarkButton.classList.toggle("selected");
//       const isSelected = bookmarkButton.classList.contains("selected");
//       const img = bookmarkButton.querySelector("img");
//       // console.log(img.getAttribute("src"));
//       if (isSelected) {
//         img.setAttribute("src", "./assets/bookmark_filled.png");
//       } else {
//         img.setAttribute("src", "./assets/bookmark.png");
//       }
//     });
//   });
