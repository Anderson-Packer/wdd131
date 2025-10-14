const menuButton = document.querySelector(".button");
function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImg = document.querySelector('dialog img');
const closeBtn = document.querySelector('.close-viewer');

gallery.addEventListener('click', (event) => {
  const clickedImg = event.target.closest('img');
  if (!clickedImg) return;

  const smallSrc = clickedImg.src;
  const parts = smallSrc.split('-');
const largeSrc = parts[0] + '-' + parts[1] + '-full.jpeg';
  
  console.log(largeSrc)

  modalImg.src = largeSrc;
  modalImg.alt = clickedImg.alt;

  modal.showModal();
});



closeBtn.addEventListener('click', () => {
  modal.close();
});

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.close();
  }
});