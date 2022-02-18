let accountAvatar = document.querySelector(".account-avatar");
let accountDropdown = document.querySelector(".account-dropdown");
let signUpContainer = document.querySelector(".signUp-container");

console.log(accountAvatar);
console.log(accountDropdown);
accountAvatar.addEventListener("click", () => {
  console.log("click");
  accountDropdown.classList.toggle("dropdown-active");
});
signUpContainer.addEventListener("click", () => {
  accountDropdown.classList.remove("dropdown-active");
});
