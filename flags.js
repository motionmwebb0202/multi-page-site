const hero = document.querySelector(".hero");
const searchInput = document.querySelector(".header-input");
const btn = document.querySelector(".btn button");
const body = document.querySelector("body");


let button = false;
let flags = [];

// btn.addEventListener("click", () => {
//   if (button == true) {
//     body.style.background = "black";
//   } else {
//     body.style.background = "white";
//   }
//   button = !button;
// });

fetch("https://restcountries.com/v3.1/all")
  .then((data) => data.json())
  .then((data) => {
    console.log(data);
    flags = data; 

    data.map((country) => {
      hero.innerHTML += `
        <div class="card">
        <img
          src="${country.flags.png}"
          alt=""
        />
        <h3>${country.name.common}</h3>
        <h2>${country.capital}</h2>

     
    
      
      </div>`;
    });
  });

searchInput.addEventListener("keyup", (e) => {
  hero.innerHTML = "";
  const value = e.target.value;
  console.log(value);
  const filteredCountries = flags.filter((countries) => {
    if (countries.name.common.toLowerCase().includes(value.toLowerCase())) {
      return countries;
    }
    if (
      countries.translations.rus.common
        .toLowerCase()
        .includes(value.toLowerCase())
    ) {
      return countries;
    }
  });

  filteredCountries.map((country) => {
    hero.innerHTML += `
        <div class="card">
        <img
          src="${country.flags.png}"
          alt=""
        />
        <h3>${country.name.common}</h3>

      </div>`;

  });
});
