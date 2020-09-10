// 1. Change the title of the page to `Hello AltCampus!`

document.title = `Hello AltCampus!`;

// 2. Select the element using the children property:

console.log(document.body.children[0]);

//    - Select the `h1` element and change the value to `Learning DOM`

document.body.children[0].innerText = `Learning DOM`;

//    - Select the first `li` element inside the `ul` with class `topics` and change the innerText to `all about document`

document.querySelector(".topics li").innerText = `all about document`;

//    - Select the input element with name `email`

console.log(document.querySelector("#email"));

// 3. Log the number (using console.log) of children of all the `li` element inside the ul with class `topics`

console.log(document.querySelectorAll(".topics li").length);

// 4. Select the first input using the `type` selector and store them in variable named `emailInput`

const emailInput = document.querySelector("#email");

// 5. Select the ul element using class selector and store in `topics`

const topics = document.getElementsByClassName("topics");

// 6. Select the first label element and store in `label`

const label = document.querySelector("label");

// 7. Select the input of type `checkbox` with the `id` selector and store in `inputCheckbox`

const inputCheckbox = document.getElementById("remember");

// 8. Select the input of type password using Attribute selectors. (eg: input[type="text"]) and store in `password`

const password = document.querySelector("input[type='password']");

// 9. Select the input using the placeholder attribute selector with value `password` and store in `attrPassword`

const attrPassword = document.querySelector(`[placeholder="password"]`);

// 10. Select all the `li` element and store in `allTopics`

const allTopics = document.querySelectorAll(".topics li");

// 11. Select all the input element of any type and store in `allInput`

const allInput = document.querySelectorAll("input");

// 12. Use forEach to console the `innerText` property of all the li element in `allTopics` variable.

allTopics.forEach((e) => console.log(e.innerText));

// 13. Select all the elements with class `list` and store in variable `listOfSelectedTopics`

const listOfSelectedTopics = document.querySelectorAll(".list");

// 14. Select the first li element inside the `ul` element using `>` (direct child) and store in `firstLi`

const firstLi = document.querySelector("ul > li");

// 15. Select all the img element and log the number of element saying `The total number of img element is ---`

console.log(
	`The total number of img element is ${
		document.querySelectorAll("img").length
	}`
);

// 16. Select all the `p` element and store in `allPElement`

const allPElement = document.querySelectorAll("p");

// 17. Select all the buttons and log the count of buttons.

console.log(document.querySelectorAll("button").length);

// 18. Select all the `label` element and log the count.

console.log(document.querySelectorAll("label").length);

// 19. Select all the elements with `id` of `test`

console.log(document.querySelectorAll("#test").length);

// 20. Select the first element with id `test` using `getElementById`

console.log(document.getElementById("test"));

// 21. Select the parent element of the element stored in `topics` variable (#5) and log the element.

console.log(topics[0].parentElement);

// 22. Select the next element sibling of the element stored in `topics` variable (#5) and log the element.

console.log(topics[0].nextElementSibling);

// 23. Select the previous element sibling of the element stored in `topics` variable (#5) and change the `innerText` property to `Learning About Walking the DOM`.

console.log(topics[0].previousElementSibling);

// 24. Select the first element child of the element stored in `topics` variable (#5) and change the `innerText` property of the element to `This is the first child element`.

console.log(topics[0].firstElementChild);

// 25. Select the last element child of the element stored in `topics` variable (#5) and log the `typeof` the element.

console.log(topics[0].lastElementChild);

// 26. Select the element with type `fieldset` and store in a variable named `fieldsetElm`.

const fieldsetElm = document.querySelector("fieldset");

// 27. Select the parent element of the element stored in `fieldsetElm` variable (#5) and log the `typeof` the element.

console.log(fieldsetElm.parentElement);
