const dropdown = document.querySelector('.js-select')
const result = document.querySelector('.js-result')
const url = 'https://dog.ceo/api/breeds/list';
const url2 = 'https://dog.ceo/api/breed/${breedName}/images/random'
// get data from API: https://dog.ceo/api/breeds/list
// parse data into JSON
// based on json response, populate the dropdown
// when you are done, make dropdown enabled (remove disabled attribute)

// add dropdown event listener - change
// get dropdown selected option - it holds name of the breed
// get data from API, use template string for API URL: `https://dog.ceo/api/breed/${breedName}/images/random`
// prase data into JSON
// display the photo

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let breeds = data.message;
  let status = data.status;
  if (status == 'success') {
    return breeds.map(function(breed) {
      let option = createNode('option')
      option.innerHTML = `${breed}`;
      append(dropdown, option)
      dropdown.removeAttribute('disabled')
    })
  }
})
.catch(function(error) {
  console.log(JSON.stringify(error));
});

dropdown.addEventListener('change', function() {
  let breedName = dropdown.options[dropdown.selectedIndex].text
  fetch(`https://dog.ceo/api/breed/${breedName}/images/random`)
  .then((resp) => resp.json())
  .then(json => {
    result.innerHTML = ''
    result.innerHTML += `<li><img src='${json.message}' alt='${breedName}'></li>`
  })
  .catch(function(error) {
    console.log(JSON.stringify(error));
  });
})
