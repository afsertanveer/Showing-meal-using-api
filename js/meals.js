const loadMeals = (search)=>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => displayMeals(data.meals));
}
const displayMeals = meals =>{
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerHTML = ``;
    meals.forEach( meal =>{
      
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
            <div onclick="loadMealDetail(${meal.idMeal})" class="card">
                <img src="${
                  meal.strMealThumb
                }" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 200)}
                    </p>
                </div>
            </div>
          
        `;
        mealContainer.appendChild(mealDiv);
    })
}
const searchFood = () => {
    const searchField = document.getElementById('search-field');
    searchValue = searchField.value;
    loadMeals(searchValue);
    searchField.value = '';
}

const loadMealDetail = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => displayMealDetail(data.meals[0]));
}

const displayMealDetail = (meal) =>{
    const detailContainer = document.getElementById('detail-container');
    detailContainer.innerHTML =``;
    const  detailDiv = document.createElement('div');
    detailDiv.classList.add('card');
    detailDiv.innerHTML = `
     <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0, 200)}
              </p>
            </div>
    `;
    detailContainer.appendChild(detailDiv);

}

loadMeals('');




