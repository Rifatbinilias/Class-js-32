
/* const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => console.log(data))
} */


const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

loadCountries()

// এইটা হলো দেখাবে উপরের সাথে কন্টাক করে দেওয়া 
const displayCountries = (countries) => {
    // console.log(countries);
    //নিচের এইটা ফাইল টা কে ডিসপ্লেতে countries গুলো দেখাবে। 
    const countryDiv = document.getElementById('countries');
    //forEach টা দিয়ে country গুলো আলাদা আলাদা করে দেখাবে কোন return করতে হবে না। 
    countries.forEach(country => {
        // console.log(country);
        // এইটা নতুন একটা div খুললাম 
        const div = document.createElement('div');
        //এইটা আবার উপরের div এর সাথে আরেকটা যোগ করে দিলাম। 
        div.classList.add('country');
        // এইটার ভিতরে কি কি আমরা দেখেবো তার নাম ধরে ধরৈ এনে দিতে হবে। 
        div.innerHTML = `
        <h3>${country.name.common} </h3>
        <p>${country.capital} </p>
        <button onclick="loadCountryDetails('${country.name.common}')"> Show Details</button>
        `
        countryDiv.appendChild(div);
    })
}

//সিংগেল একটা country কে যদি আমরা console এর মধ্যে দেখতে চাই তাহলে এইটা করতে হবে।
/* const loadCountryDetails = (name) => {
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
} */


//সিংগেল একটা country কে যদি আমরা display এর মধ্যে দেখতে চাই তাহলে এইটা করতে হবে। অথ্যাৎ ক্লিক করলে দেখাবে। ঐ দেশের বিস্তারিত। 
const loadCountryDetails = (name) => {
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDeatiles(data[0]))
}

const displayCountryDeatiles = (country) => {
    console.log(country);
    const detailsDiv = document.getElementById('country-details');
    detailsDiv.classList.add('detrails')
    detailsDiv.innerHTML = `
    <h3>${country.name.common} </h3>
    <p>${country.capital} </p>
    <p>${country.population} </p>
    <img src="${country.flags.png}" alt="">

    `

}

