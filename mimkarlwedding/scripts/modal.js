function launchModal() {
  let modal = document.getElementById('modal')
  modal.style.display = 'flex'
}

document.getElementById('RSVP-button').onclick = launchModal

function launchModal () {
  let modal = document.getElementById('modal')
  modal.style.display = 'flex'
}

document.getElementById('RSVP-button-2').onclick = launchModal

function closeModal() {
  let modal = document.getElementById('modal')
  modal.style.display = 'none'
}

document.getElementById('modal-overlay').onclick = closeModal
document.getElementById('modal-cross').onclick = closeModal

function addPerson() {
  let modal = document.getElementById('person2')
  modal.style.display = 'flex'
  // button('add-person-button').style.display = 'none'
}

document.getElementById('add-person-button').onclick = addPerson

// function hideAddPerson() {
//   let modal = document.getElementById('add-person-button')
//   modal.style.display = 'none'
// }
//
// document.getElementById('add-person-button').onclick = hideAddPerson
//
// addPerson;
// hideAddPerson;
