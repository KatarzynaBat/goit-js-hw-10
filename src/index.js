import { fetchBreeds, fetchCatByBreed } from './cat-api';
const loader = document.querySelector('.loader');
const errorParagraph = document.querySelector('.error');
const selectBtn = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');

catInfo.style.display = 'flex';
selectBtn.style.display = 'none';
errorParagraph.style.display = 'none';

fetchBreeds()
  .then(data => {
    // Data handling
    const breeds = data;
    console.log(breeds);
    for (const breed of breeds) {
      const breedOption = document.createElement('option');
      breedOption.textContent = breed.name;
      breedOption.value = breed.id;
      selectBtn.append(breedOption);
    }

    loader.style.display = 'none';
    selectBtn.style.display = 'block';
  })
  .catch(error => {
    errorParagraph.style.display = 'block';
    loader.style.display = 'none';
  });

function selectionChange() {
  let selectedBreedId = selectBtn.value;
  fetchCatByBreed(selectedBreedId)
    .then(data => {
      catInfo.innerHTML = `<image width="300" src="${data[0].url}"></image> 
      <div style= "padding: 16px"><h1>${data[0].breeds[0].name}</h1> <p> ${data[0].breeds[0].description}</p> <p> <strong>Temperaments:</strong> ${data[0].breeds[0].temperament}</p>
      </div>
    `;
    })
    .catch(error => {
      errorParagraph.style.display = 'block';
      loader.style.display = 'none';
    });
}

selectBtn.addEventListener('change', selectionChange);
