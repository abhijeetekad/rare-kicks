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

/************************ */
let signIn = document.querySelector(".sign-in");
let liveSignIn = document.querySelector(".live-sign-in");
let closeSignIn = document.querySelector(".close-sign-in");
let logIn = document.querySelector(".log-in");
let liveLogIn = document.querySelector(".live-log-in");
let closeLogIn = document.querySelector(".close-log-in");

signIn.addEventListener("click", () => {
  liveSignIn.classList.toggle("live-sign-in-active");
});
closeSignIn.addEventListener("click", () => {
  liveSignIn.classList.remove("live-sign-in-active");
});
logIn.addEventListener("click", () => {
  liveSignIn.classList.remove("live-sign-in-active");
  liveLogIn.classList.add("live-log-in-active");
});
closeLogIn.addEventListener("click", () => {
  liveLogIn.classList.remove("live-log-in-active");
});
/******************** */
