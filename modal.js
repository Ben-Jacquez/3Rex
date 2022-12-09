const modalButton = $('#modalButton')
const myInput = document.getElementById('myInput')

modalButton.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})