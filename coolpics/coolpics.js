const menuButton = document.querySelector('.button');
const menuItems = document.querySelectorAll('.menu li');

menuButton.addEventListener('click', () => {
  menuItems.forEach(item => {
    item.classList.toggle('hide');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.gallery');
  const modal = document.querySelector('.image-modal');
  const modalImg = modal.querySelector('img');
  const closeBtn = modal.querySelector('.close-viewer');


  gallery.addEventListener('click', (event) => {
    const clickedImg = event.target.closest('img');
    if (!clickedImg) return;

    const fullSrc = clickedImg.src.split('-sm')[0] + '-full.jpeg';
    modalImg.src = fullSrc;
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
});






