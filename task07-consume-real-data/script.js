/**
 * All Rights Reserved
 * This software is property information of AKUREY S.A.
 * Contact us at contact@akurey.com
 * @summary short description for the file
 */

let characters = [];
let islands = [];
let mistObjects = [];

const toggleCollapse = (elementId) => {
  const elem = document.getElementById(elementId);
  elem.classList.toggle("show");
};

const toggleSipnosis = (elementId) => {
  toggleCollapse(elementId);

  if (!document.getElementById(elementId).classList.contains("show")) {
    document.getElementById("sipnosisIcon").innerText = "expand_more";
    document.getElementById("sipnosisText").innerText = "Read All";
  } else {
    document.getElementById("sipnosisIcon").innerText = "expand_less";
    document.getElementById("sipnosisText").innerText = "Read Less";
  }

  document
    .getElementById("mobile__logo")
    .classList.toggle("mobile__logo--expanded");

  document
    .getElementById("collapse__card")
    .classList.toggle("collapse__card--expanded");
  document
    .getElementsByName("islandLike")
    .forEach((elem) => elem.classList.toggle("islandLike"));
};

const characterComponent = (character) => {
  return `<a class="character__card" href="">
<span class="character__card__name">${character.name}</span>
<div class="character__card__gradient"></div>
<img src="./images/${character.img}" />
</a>`;
};

const islandComponent = (island) => {
  return `<a href="" class="island__card">
  <div class="island__card__textContainer">
    <span class="island__card__name">${island.name}</span>
    <div class="island__card__locationContainer">
      <span class="material-icons"> place </span>
      <span class="island__card__location">${island.Location}</span>
    </div>
    <span class="material-icons" name="islandLike"> favorite </span>
  </div>
  <img
    src="./images/${island.img}"
  />
</a>`;
};

const mistObjectComponent = (mistObject) => {
  return `<a href="" class="mistObject__card">
  <img
    src="./images/${mistObject.img}"

  />
  <div class="mistObject__card__textContainer">
    <h3 class="mistObject__card__name">${mistObject.name}</h3>
    <p class="mistObject__card__description">
      ${mistObject.description}
    </p>
  </div>
</a>`;
};

const populateData = async (cantElements, data, type) => {
  let elem = "";
  let components = "";

  let createComponent;

  if (type === "islands") {
    elem = document.getElementById("islandsContainer");
    createComponent = islandComponent;
  } else if (type === "characters") {
    elem = document.getElementById("charactersContainer");
    createComponent = characterComponent;
  } else if (type === "mistObjects") {
    elem = document.getElementById("mistObjectsContainer");
    createComponent = mistObjectComponent;
  }

  for (let pos = 0; pos < cantElements; pos++) {
    const element = data[pos];
    components += createComponent(element);
  }

  elem.innerHTML = components;
};

const sortData = (a, b) => {
  return a.name > b.name ? 1 : -1;
};

const loadData = async () => {
  await fetch("https://static.akurey.com/trainings/OnePieceInformation.json")
    .then((response) => response.json())
    .then((data) => {
      islands = data.islands.sort(sortData);
      characters = data.characters.sort(sortData);
      mistObjects = data.mysticObjects.sort(sortData);
    });

  await Promise.all([
    populateData(3, islands, "islands"),
    populateData(4, characters, "characters"),
    populateData(4, mistObjects, "mistObjects"),
  ]);
};

window.onload = loadData;
