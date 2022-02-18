const slider = document.querySelector(".input");
const value = document.querySelector(".value");
value.textContent = slider.value;
slider.oninput = function () {
  value.textContent = this.value;
};

/*account drop-down */
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
/************* */
