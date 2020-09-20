function clickButton() {
  console.log('Click button')
  fetch('http://localhost:8000/classes/', {
    method: 'GET',
    mode: 'no-cors'
  }).then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(e => console.error(e))
}
function doClick(form) {
  console.log(this);
  console.log(form);
  let formData = new FormData(form);
  fetch(form.getAttribute('action'), {
    method: form.getAttribute('method'),
    body: formData
  }).then(
    response => response.json()
  ).then(
    data => console.log(data)
  ).catch(e => console.error(e))
}
