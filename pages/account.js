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
/**************** */

let tabs = document.querySelector(".tabs");
let tabHeader = tabs.querySelector(".tab-header");
let tabBody = tabs.querySelector(".tab-body");
let tabHeaderNodes = tabs.querySelectorAll(".tab-header > div");
let tabBodyNodes = tabs.querySelectorAll(".tab-body > div");

for (let i = 0; i < tabHeaderNodes.length; i++) {
  console.log("clicked");
  tabHeaderNodes[i].addEventListener("click", function () {
    console.log("clicked");
    tabHeader.querySelector(".active").classList.remove("active");
    tabHeaderNodes[i].classList.add("active");
    tabBody.querySelector(".active").classList.remove("active");
    tabBodyNodes[i].classList.add("active");
  });
}
