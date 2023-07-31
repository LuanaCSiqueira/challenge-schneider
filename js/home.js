// DISABLE LINK NAVIGATION FOR CARD FOOTER BUTTONS
const cardActions = document.querySelectorAll('#card-actions');
cardActions.forEach((item) =>
  item.addEventListener('click', (e) => e.preventDefault())
);

// LIKE BUTTON
const likeIcon = document.querySelectorAll('[data-id="like"]');

likeIcon.forEach((item) => {
  item.parentElement.querySelector('span').innerText = generateRandomNumber(); //SEED RANDOM NUMBERS FOR LIKES
});

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

// MODAL COMMENT
const commentLikeBtn = document.querySelectorAll('[data-id="comment-like"]');
const commentReplyBtn = document.querySelectorAll('[data-id="comment-reply"]');
const replySection = document.querySelectorAll('#reply-section');
const commentLineHorizontal = document.querySelectorAll(
  '.comment-line-horizontal'
);
const commentLineVertical = document.querySelectorAll('.comment-line-vertical');
const commentAvatar = document.querySelectorAll('[data-id="comment-avatar"]');

function calculateVerticalLines() {
  const commentFirstAvatarPosition =
    commentAvatar[0].getBoundingClientRect().bottom;
  const commentSecondAvatarPosition =
    commentAvatar[1].getBoundingClientRect().top + 20;
  const avatarDiff = commentSecondAvatarPosition - commentFirstAvatarPosition;

  commentLineVertical[0].style.setProperty(
    '--dynamicHeight',
    avatarDiff + 'px'
  );
}

window.addEventListener('resize', calculateVerticalLines);

commentLikeBtn.forEach((btn, index) =>
  btn.addEventListener('click', () => {
    likeComment(index);
    calculateVerticalLines();
  })
);
commentReplyBtn.forEach((btn, index) =>
  btn.addEventListener('click', () => {
    replyComment(index);
    calculateVerticalLines();
  })
);

function likeComment(index) {
  replySection[index].innerHTML = '';
  commentReplyBtn[index].classList.remove('active');
  commentLikeBtn[index].classList.toggle('active');
  if (commentLikeBtn[index].classList.contains('active')) {
    commentLikeBtn[index].innerText = 'Curtiu (1)';
  } else {
    commentLikeBtn[index].innerText = 'Curtir';
  }
}

function replyComment(index) {
  commentReplyBtn[index].classList.toggle('active');
  if (commentReplyBtn[index].classList.contains('active')) {
    const container = document.createElement('div');
    const avatar = document.createElement('img');
    const inputGroup = document.createElement('div');
    const replyInput = document.createElement('input');
    const replyBtn = document.createElement('button');
    const icon = document.createElement('i');

    container.classList.add(
      'd-flex',
      'align-items-center',
      'gap-2',
      'mb-5',
      'mt-2'
    );
    inputGroup.classList.add('input-group');
    replyBtn.classList.add(
      'input-group-text',
      'bg-transparent',
      'text-body-tertiary'
    );
    icon.classList.add('bi', 'bi-send-fill');
    avatar.classList.add('rounded-circle');
    replyInput.classList.add('form-control', 'flex-fill');

    avatar.setAttribute('src', './assets/avatar.jpg');
    avatar.setAttribute('alt', 'user photo');
    avatar.setAttribute('width', '40');
    avatar.setAttribute('height', '40');

    replyInput.setAttribute('placeholder', 'Escreva sua resposta');
    replyBtn.setAttribute('id', 'comment-input');

    replyBtn.appendChild(icon);
    inputGroup.append(replyInput, replyBtn);
    container.append(avatar, inputGroup);
    replySection[index].appendChild(container);
  } else {
    replySection[index].innerHTML = '';
  }
}
