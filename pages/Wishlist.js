let accountAvatar = document.querySelector(".account-avatar");
let accountDropdown = document.querySelector(".account-dropdown");
let wishListSection = document.querySelector(".wishList-section");

console.log(accountAvatar);
console.log(accountDropdown);
accountAvatar.addEventListener("click", () => {
  console.log("click");
  accountDropdown.classList.toggle("dropdown-active");
});
wishListSection.addEventListener("click", () => {
  accountDropdown.classList.remove("dropdown-active");
});
