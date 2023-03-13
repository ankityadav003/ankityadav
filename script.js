function myFunction() {
  var x = document.getElementById("a");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function myFunction4() {
  var what = document.getElementById("chat1");
  what.classList.toggle("chat1");
}
function myFunction5() {
  var drop = document.getElementById("dropdown");
  drop.classList.toggle("drop");
}

function whatsapp() {
  var whatsapp = document.getElementById("whatsapp2");
  whatsapp.classList.toggle("whatsapp-container-open");
}

function active() {
  var active = document.getElementById("second-nav");
  active.classList.toggle("second-nav-active");
}
function dark() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

let hero = document.getElementById("hero");
console.log(hero);
let nav = document.querySelector("nav");
console.log(nav);
const observer = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    console.log(ent);
    !ent.isIntersecting
      ? nav.classList.add("sticky")
      : nav.classList.remove("sticky");
    // document.body.classList.add("sticky")
  },
  {
    root: null,
    threshold: 0,
  }
);

observer.observe(hero);

var type = new Typed(".type1", {
  strings: ["Web Developer", "Programmer", "Freelancer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
var type = new Typed(".type", {
  strings: ["Web Developer", "Programmer", "Freelancer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});




var modal = document.getElementById("myModal");
var btn = document.getElementById("logo");

var span = document.getElementById("cross");

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}