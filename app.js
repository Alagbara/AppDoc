const nameList = document.querySelector(".name-list");
const textInput = document.querySelector(".text-input");
const addBtn = document.querySelector(".add-btn");

addBtn.addEventListener("click", function() {
  const newLi = document.createElement("LI");
  const liContext = document.createTextNode(textInput.value);
  newLi.appendChild(liContext);
  nameList.appendChild(newLi);
});
