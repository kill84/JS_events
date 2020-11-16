console.info('%c Project JS events ', "background: blue; color: orange;");

  // Fonctionalité 1

  let i = 0;
  let footer = document.querySelector("body > footer");
  let onFooterClick = function() {
  i += 1
      console.log("clic numéro" + " " + i );
  };



// Fonctionnalité 2

let hamburgerButton = document.querySelector("body > header > div.navbar.navbar-dark.bg-dark.box-shadow > div > button");
let navbar = document.querySelector("#navbarHeader");

 function onNavbarClick() {
  navbar.classList.toggle("collapse");
}


// Fonctionnalité 3

let editButton = document.querySelector("body > main > div > div > div > div:nth-child(1) > div > div > div > div > button.btn.btn-sm.btn-outline-secondary")
let editText = document.querySelector("body > main > div > div > div > div:nth-child(1) > div > div > p")

function onEditClick() {
  editText.style.color = "red";
};

// Fonctionnalité 4

let editButton2 = document.querySelector("body > main > div > div > div > div:nth-child(2) > div > div > div > div > button.btn.btn-sm.btn-outline-secondary")
let editText2 = document.querySelector("body > main > div > div > div > div:nth-child(2) > div > div > p")

function onEditClick2() {
  if (editText2.style.color == "green"){
  editText2.style.color = "";
}
else {
  editText2.style.color = "green";
}
};

// Fonctionnalité 5

let bootstrap = document.querySelector("head > link");

function bootstrapVanish() {
  if (bootstrap.disabled == false){
  bootstrap.disabled = true;
}
else {
  bootstrap.disabled = false;
}
};

// Fonctionnalité 6
let viewButtons = document.querySelectorAll("body > main > div > div > div > div:nth-child(n) > div > div > div > div > button.btn.btn-sm.btn-success")
let imageCards = document.querySelectorAll("body > main > div > div > div > div:nth-child(n) > div > img")
let editTexts = document.querySelectorAll("body > main > div > div > div > div:nth-child(n) > div > div > p")


for (let i = 0; i < 6; i++){
let viewButton = viewButtons[i];
let imageCard = imageCards[i];
let editTextN = editTexts[i];
let toggler = true

function onViewOver() {
  if (toggler == true){
  imageCard.style.width = "20%";
  imageCard.style.margin = "auto";
  editTextN.style.display = "none";
  toggler = false ;
  }
else if (toggler == false){
  let viewButton = viewButtons[i];
  imageCard.style.width = "";
  editTextN.style.display = "block";
  toggler = true ;
  }
  };
viewButton.addEventListener("mouseover", onViewOver);
};

// Fonctionnalité 7
let arrow = document.querySelector("body > main > section > div > p > a.btn.btn-secondary.my-2");
const parent = document.querySelector("body > main > div > div > div");

function changeCards() {
  parent.insertBefore(parent.children[5], parent.children[0]);
}

// Fonctionnalité 8
let arrowBack = document.querySelector("body > main > section > div > p > a.btn.btn-primary.my-2");
let lastCard = document.querySelectorAll("body > main > div > div > div > div:nth-child(5)");
arrowBack.href = "#";

function changeCardsBack() {
  parent.insertBefore(parent.children[0], lastCard.nextSibling);
}

// Fonctionnalité 9
let titleButton = document.querySelector("body > header > div.navbar.navbar-dark.bg-dark.box-shadow > div > a")
let body = document.querySelector("body");

function crazyStuff(e){
  if (e.key == "a") {
    body.className = "";
    body.className = "col-4";
  }
  else if (e.key == "y"){
    body.className = "";
    body.className = "col-4 offset-md-4";
  }
  else if (e.key == "p"){
    body.className = "";
    body.className = "col-4 offset-md-8";
  }
  else if (e.key == "e"){
    body.className = "";
  }
}





footer.addEventListener("click", onFooterClick);
hamburgerButton.addEventListener("click", onNavbarClick);
editButton.addEventListener("click", onEditClick);
editButton2.addEventListener("click", onEditClick2);
navbar.addEventListener("dblclick", bootstrapVanish);
arrow.addEventListener("click", changeCards);
arrowBack.addEventListener("click", changeCardsBack);
titleButton.addEventListener("keydown", crazyStuff);
