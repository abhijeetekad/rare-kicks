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
/*Account dropdown */
let accountAvatar = document.querySelector(".account-avatar");
let accountDropdown = document.querySelector(".account-dropdown");
let main = document.querySelector(".main");

console.log(accountAvatar);
console.log(accountDropdown);
accountAvatar.addEventListener("click", () => {
  console.log("click");
  accountDropdown.classList.toggle("dropdown-active");
});
main.addEventListener("click", () => {
  accountDropdown.classList.remove("dropdown-active");
});
