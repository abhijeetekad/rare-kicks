let removeBtn = document.querySelector(".decrement-btn");
let AddBtn = document.querySelector(".increment-btn");
let count = document.querySelector(".count");
count.textContent = 0;

let num = 0;
AddBtn.addEventListener("click", () => {
  num = num + 1;
  count.textContent = num;
});

removeBtn.addEventListener("click", () => {
  if (num > 0) {
    num = num - 1;
    count.textContent = num;
  }
});
