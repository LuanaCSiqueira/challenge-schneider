// LIKE BUTTON
const likeIcon = document.querySelectorAll('[data-id="like"]');

likeIcon.forEach((_, index) => {
  const likeBtn = likeIcon[index].parentElement;
  likeBtn.addEventListener('click', () => handleLike(index));
});

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
