let result = document.querySelector(".meal")

const urlParams = new URLSearchParams(window.location.search);

let mealId = urlParams.get("id");

const API = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
const IMAGE_API = `https://www.themealdb.com/images/ingredients/`



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

async function getMeal() {
    try {
        const res = await fetch(API);
        const data = await res.json();

        console.log(data);
        showMeal(data.meals[0]);
    }catch(error) {
        console.log(error);
    }
}

getMeal()

function showMeal(data) {
    console.log(data.strInstructions.split(". "));
    let showUrl = "";
    for(let i = 0; i < 20; i++) {
        const findUrl = data["strIngredient" + i]
        if(findUrl) {
            showUrl += `
                <a onclick="setIn('${findUrl}')">
                    <img src="${IMAGE_API + findUrl}.png" alt="">${findUrl}
                </a> 
            `
        }
    }

    let flag_image = ""

    for(let i = 0; i < flags.length; i++) {
        if(flags[i].strArea == data.strArea) {
            flag_image = flags[i].item
        }
    }
    result.innerHTML = 
        `
        <h2><img src="https://www.themealdb.com/images/icons/flags/big/64/${flag_image}.png" alt="">${data.strMeal}</h2>
                <h2>Ingredients</h2>
                <div class="left">
                    <img src="${data.strMealThumb}" alt="">
                    <button class="category-btn">${data.strCategory}</button>
                    <div class="arrows">
                        <img onclick="setId('prev')" src="https://www.themealdb.com/images/icons/Arrow-Left.png" alt="">
                        <img onclick="setId('next')" src="https://www.themealdb.com/images/icons/Arrow-Right.png" alt="">
                    </div>
                </div>
                <div class="right">
                    ${showUrl}
                </div>
                <div class="instructions">
                    <h3>Instructions</h3>
                    ${data.strInstructions.split(". ").map((item) => {
                        return`
                        <p>${item} .</p>
                        `
                    } ).join("")}
                </div>
        `
}

function setId(str) {
  const count = str =="prev" ? parseInt(mealId) -1 : parseInt(mealId) +1
  window.location.href = `meal.html?id=${count}`;
}

function setIn(str) {
  window.location.href = `ingredient.html?str=${str}`
}