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
