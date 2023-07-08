// DISABLE LINK NAVIGATION FOR CARD FOOTER BUTTONS
const cardActions = document.querySelectorAll('#card-actions');
cardActions.forEach((item) =>
  item.addEventListener('click', (e) => e.preventDefault())
);

// LIKE BUTTON
const likeIcon = document.querySelectorAll('[data-id="like"]');

likeIcon.forEach((item) => {
  item.parentElement.querySelector('span').innerText = generateRandomNumber();
});

likeIcon.forEach((_, index) => {
  const likeBtn = likeIcon[index].parentElement;
  likeBtn.addEventListener('click', () => handleLike(index));
}); //SEED RANDOM NUMBERS FOR LIKES

function handleLike(index) {
  const likeCount = likeIcon[index].nextSibling;
  if (likeIcon[index].classList.contains('bi-heart')) {
    likeIcon[index].classList.replace('bi-heart', 'bi-heart-fill');
    likeCount.innerText = +likeCount.innerText + 1;
  } else {
    likeIcon[index].classList.replace('bi-heart-fill', 'bi-heart');
    likeCount.innerText = +likeCount.innerText - 1;
  }
  likeIcon[index].classList.toggle('text-danger');
}

// COMMENT BUTTON
const commentIcon = document.querySelectorAll('[data-id="comment"]');

commentIcon.forEach((item) => {
  item.parentElement.querySelector('span').innerText = generateRandomNumber();
}); //SEED RANDOM NUMBERS FOR COMMENTS

commentIcon.forEach((_, index) => {
  const commentBtn = commentIcon[index].parentElement;
  commentBtn.setAttribute('data-bs-toggle', 'modal');
  commentBtn.setAttribute('data-bs-target', '#comments-modal');
});

// VIEWS BUTTON
const viewsIcon = document.querySelectorAll('[data-id="views"]');

viewsIcon.forEach((_, index) => {
  const viewsBtn = viewsIcon[index].parentElement;

  const value = (viewsBtn.querySelector('span').innerText =
    generateRandomNumber()); //SEED RANDOM NUMBERS FOR VIEWS

  viewsBtn.setAttribute('data-bs-toggle', 'tooltip');
  viewsBtn.setAttribute(
    'data-bs-title',
    `John Doe e mais ${value - 1} pessoas visualizaram isso.`
  );
});
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) =>
    new bootstrap.Tooltip(tooltipTriggerEl, {
      html: true,
    })
);

//GENERATE RANDOM NUMBER
function generateRandomNumber() {
  return Math.floor(Math.random() * 100);
}
