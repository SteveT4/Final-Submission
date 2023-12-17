fetch('heading.json')
  .then(response => response.json())
  .then(jsonData => {
    // Access the htmlContent property
    const htmlContent = jsonData.htmlContent;

    // Update the container with the HTML content
    const container = document.getElementById('container');
    container.innerHTML = htmlContent;
  })
  .catch(error => console.error('Error fetching JSON:', error));