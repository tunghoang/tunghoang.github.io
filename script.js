function clickButton() {
  console.log('Click button')
  //fetch('http://localhost:8000/classes/', {
  fetch('http://google.com', {
    method: 'GET'
  }).then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(e => console.error(e))
}
