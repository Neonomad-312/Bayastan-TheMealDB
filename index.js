let menu = document.querySelector(".menu-burger");
let header = document.querySelector(".header");
let navRight = document.querySelector(".nav-right");
menu.onclick = function () {
    if (header.style.height == "90px") {
        header.style.height = "300px";
        navRight.style.display = "flex";
    } else {
        header.style.height = "90px";
        navRight.style.display = "none";
    }
}

let urlParams = new URLSearchParams(window.location.search);

let letter_name = urlParams.get("s");
let letter_f = urlParams.get("f");

let flag_name = urlParams.get("a");

let searchBy = "f";
let searchValue = "a";
let filter = "search"


if (letter_name) {
    searchBy = "s";
    searchValue = letter_name;
    filter = "search"
}

if (letter_f) {
    searchBy = "f";
    searchValue = letter_f;
    filter = "search"
}

if (flag_name) {
    searchBy = "a";
    searchValue = flag_name;
    filter = "filter"
}


const API = `https://www.themealdb.com/api/json/v1/1/${filter}.php?${searchBy}=${searchValue}`;
console.log(API);
let allMeals = document.querySelector(".latest-meals-container");
let input = document.getElementById("search");

document.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
        let letter = input.value;
        window.location.href = `index.html?s=${letter}`
    }
})

async function getMeals() {
    try {
        const res = await fetch(API);
        const data = await res.json();

        console.log(data);
        showMeals(data.meals);
    } catch (error) {
        console.log(error);
    }
}

getMeals()



function showMeals(data) {
    allMeals.innerHTML = data.map((item) => {
        return `
        <div class="box" onclick="goToMealId('${item.idMeal}')">
                        <img src="${item.strMealThumb}">
                        <a href="">${item.strMeal}</a>
                    </div>
        `
    }).join("")
}

function goToMealId(id) {
  window.location.href = `meal.html?id=${id}`
} 


let first_letters = document.getElementById("first-letters");
let arrayLetters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
]

function setLetter(item) {
    window.location.href = `index.html?f=${item}`
}

first_letters.innerHTML = arrayLetters.map((item) => {
    return `
    <a onclick="setLetter('${item}')">${item}</a> /
    `
}).join("")

let flags = [
    {
      strArea: "American",
      item: "us",
    },
    {
      strArea: "British",
      item: "gb",
    },
    {
      strArea: "Canadian",
      item: "ca",
    },
    {
      strArea: "Chinese",
      item: "cn",
    },
    {
      strArea: "Croatian",
      item: "hr",
    },
    {
      strArea: "Dutch",
      item: "gb",
    },
    {
      strArea: "Egyptian",
      item: "eg",
    },
    {
      strArea: "Filipino",
      item: "ph",
    },
    {
      strArea: "French",
      item: "fr",
    },
    {
      strArea: "Greek",
      item: "gr",
    },
    {
      strArea: "Indian",
      item: "in",
    },
    {
      strArea: "Irish",
      item: "ie",
    },
    {
      strArea: "Italian",
      item: "it",
    },
    {
      strArea: "Jamaican",
      item: "jm",
    },
    {
      strArea: "Japanese",
      item: "jp",
    },
    {
      strArea: "Kenyan",
      item: "kn",
    },
    {
      strArea: "Malaysian",
      item: "my",
    },
    {
      strArea: "Mexican",
      item: "mx",
    },
    {
      strArea: "Moroccan",
      item: "ma",
    },
    {
      strArea: "Polish",
      item: "pl",
    },
    {
      strArea: "Portuguese",
      item: "pt",
    },
    {
      strArea: "Russian",
      item: "ru",
    },
    {
      strArea: "Spanish",
      item: "es",
    },
    {
      strArea: "Thai",
      item: "th",
    },
    {
      strArea: "Tunisian",
      item: "tn",
    },
    {
      strArea: "Turkish",
      item: "tr",
    },
    {
      strArea: "Ukrainian",
      item: "ua",
    },
    {
      strArea: "Unknown",
      item: "gb",
    },
    {
      strArea: "Vietnamese",
      item: "vn",
    },
    {
      strArea: "Kyrgyz",
      item: "kg"
    }
  ];


let get_flags = document.querySelector(".flags")

get_flags.innerHTML = flags.map((item) => {
    return `
    <img onclick="setFlag('${item.strArea}')" src="https://www.themealdb.com/images/icons/flags/big/64/${item.item}.png" />
    `
}).join("")

function setFlag(item) {
    window.location.href = `index.html?a=${item}`
}

// "gb",
// "us",
// "fr",
// "ca",
// "jm",
// "cn",
// "nl",
// "eg",
// "gr",
// "in",
// "ie",
// "it",
// "jp",
// "kn",
// "my",
// "mx",
// "ma",
// "hr",
// "no",
// "pt",
// "ru",
// "ar",
// "es",
// "sk",
// "th",
// "sa",
// "vn",
// "tr",
// "sy",
// "dz",
// "tn",
// "pl",
// "ph",
// "ua",

