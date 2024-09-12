const searcBtn = document.querySelector(".dogs button");
const selectBreeds = document.querySelector("#breeds");
const dogImage = document.querySelector(".dog-image");
const RANDOM_DOG_IMAGE_API = "https://dog.ceo/api/breeds/image/random";
const LIST_ALL_BREEDS_API = "https://dog.ceo/api/breeds/list/all";

let breed = "Random";

fetch(LIST_ALL_BREEDS_API)
  .then((data) => data.json())
  .then((data) => {
    const listBreeds = Object.keys(data.message);
    console.log(listBreeds);

    listBreeds.map((breed) => {
      const newOption = document.createElement("option");
      newOption.textContent = breed;
      newOption.value = breed;

      selectBreeds.append(newOption);
    });
  });

  selectBreeds.addEventListener("change", (e) => {
    breed = e.target.value;
  })


searcBtn.addEventListener("click", () => {
    if(breed == "Random") {
        getRandomImage()
    } else {
        getBreedDogImage()
    }
});



function getRandomImage() {
    fetch(RANDOM_DOG_IMAGE_API)
    .then((data) => data.json())
    .then((data) => {

        console.log(data);
      dogImage.src = data.message;
    });
}

function getBreedDogImage(params) {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then((data) => data.json())
    .then ((data) => {
        console.log(data);
          dogImage.src = data.message;
    })
}