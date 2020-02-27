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
}

document.getElementById('add-person-button').onclick = addPerson

function hideAddPerson() {
  let button = document.getElementById('add-person-button-row')
  button.style.display = 'none'
  // setTimeout(function () {
  //
  // }, 3000);
}

document.getElementById('add-person-button').onclick = hideAddPerson


function removePerson() {
  let modal = document.getElementById('remove-person-button-row')
  modal.style.display = 'flex'
}

document.getElementById('add-person-button').onclick = removePerson

// document.getElementById('add-person-button').onclick = addPerson; removePerson; hideAddPerson;
