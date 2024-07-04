const urlParams = new URLSearchParams(window.location.search);

const str_name = urlParams.get("str");


const API = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${str_name}`;
const IMAGE_API = `https://www.themealdb.com/images/ingredients/${str_name}.png`;
const LIST_API = `https://www.themealdb.com/api/json/v1/1/list.php?i=list`;

let leftImage = document.getElementById("left-image");
let ingName = document.getElementById("ing-name");
let desc = document.querySelector(".description");


leftImage.innerHTML = `
  <img src="${IMAGE_API}" alt="image">
`

ingName.innerHTML = `
    <h2>${str_name}</h2>
`

async function getList() {
    try {
        const res = await fetch(LIST_API);
        const data = await res.json();

        let findProduct = data.meals.find((x) => x.strIngredient == str_name)
        console.log(findProduct);

        desc.innerHTML = findProduct.strDescription
        
        console.log(data);
    }catch(error) {
        console.log(error);
    }
}
getList()


async function getIn() {
    try {
        const res = await fetch(API);
        const data = await res.json();
        console.log(data);
        showIn(data.meals)
    }catch(error) {
        console.log(error);
    }
}
getIn();

let right = document.querySelector(".right")

function showIn(data) {
    right.innerHTML = data.map((item) => {
        return `
            <a onclick="goToMeal('${item.idMeal}')">
                <img src="${item.strMealThumb}" alt="">${item.strMeal}
            </a> 
            `
    }).join("")
        
}

function goToMeal(id) {
    window.location.href = `meal.html?id=${id}`;
}

function setIdAndStr() {
    window.location.href = `ingredient.html?str=${str_name}&id=${34}`
}