let accountAvatar = document.querySelector(".account-avatar");
let accountDropdown = document.querySelector(".account-dropdown");
let homeContainer = document.querySelector(".home-container");

console.log(accountAvatar);
console.log(accountDropdown);
accountAvatar.addEventListener("click", () => {
  console.log("click");
  accountDropdown.classList.toggle("dropdown-active");
});
homeContainer.addEventListener("click", () => {
  accountDropdown.classList.remove("dropdown-active");
});
