fetch('https://api.thecatapi.com/v1/breeds')
  .then(response => {
    // Response handling
    console.log(response);
    return response.json();
  })
  .then(data => {
    // Data handling
  })
  .catch(error => {
    // Error handling
  });
