//https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

document.getElementById('error').style.display = 'none'

const searchFood = () => {
    const searchField = document.getElementById('input-field');   //html থেকে ধরৈ নিয়ৈ আইছি। 
    const searchText = searchField.value; // এইটাকে value নিয়েছি। input এর value নিতে হয়। 
    // console.log(searchText);
    searchField.value = ' '

    document.getElementById('error').style.display = 'none'
    if (searchText == '') {
        document.getElementById('error').style.display = 'block'
    } else {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
            .then(res => res.json())
            .then(data => displaySearchrResult(data.meals))
    }
}


const displaySearchrResult = (meals) => {

    // console.log(meals);
    const searchresult = document.getElementById('search-result');
    // searchresult.innerHTML = '';    //এইটা হলো কোন কিছু সার্চ করলে আগের সার্চ টা চলে যাবে নতুন যেটাকে সার্চ করেছি সেটাকে দেখাবে। 
    searchresult.textContent = '';      //এইটা হলো কোন কিছু সার্চ করলে আগের সার্চ টা চলে যাবে নতুন যেটাকে সার্চ করেছি সেটাকে দেখাবে। 
    meals.forEach(meal => {
        // console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})" class="card">
                <img src="${meal?.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${meal?.strMeal}</h5>
                  <p class="card-text">${meal.strInstructions.slice(0, 100)}.</p>
                 <a class ="btn btn-primary" target ="_blank" href="${meal.strYoutube}">Meal Video</a> 
                 <a class ="btn btn-primary">Meal Details</a> 
            </div>
        </div>
        `
        searchresult.appendChild(div)
    })

}

// এইটা হলো কোন কিছূর উপরে ক্লিক করলে সেটার ভিতরের ID টাকে দেখাবে। 
const loadMealDetail = (mealId) => {
    // console.log(mealId);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))

}

const displayMealDetails = (meal) => {
    console.log(meal);
    const mealMealDetail = document.getElementById('meal-details');
    mealMealDetail.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${meal?.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal?.strMeal}</h5>
      <h5 class="card-title">${meal?.idMeal}</h5>
      <p class="card-text">${meal.strCategory}</p>
      <p class="card-text">${meal.strTags}.</p>
      <p class="card-text">${meal.strInstructions.slice(0, 150)}.</p>
 

</div>
    `
    mealMealDetail.appendChild(div)
}

