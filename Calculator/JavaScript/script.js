let result = document.querySelector(".container .display input");
let buttons = document.querySelectorAll(".container .buttons-box .btn");
let evalButton = document.querySelector(".container .buttons-box .eval-btn");
let clearButton = document.querySelector(".container .buttons-box .ac-btn");
let deleteButton = document.querySelector(
  ".container .buttons-box .delete-btn"
);

let getValue = (e) => {
  let buttonText = e.target.innerHTML;
  if (buttonText == "x") {
    buttonText = "*";
  }

  result.value += buttonText;
};

evalButton.addEventListener("click", () => {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = "Error";
  }
});

clearButton.addEventListener("click", () => {
  result.value = "";
});

deleteButton.addEventListener("click", () => {
  result.value = result.value.substr(0, result.value.length - 1);
});

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", getValue);
}
