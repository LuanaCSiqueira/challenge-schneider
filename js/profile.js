// Image preview
const inputFile = document.querySelector('#avatar-input');
const avatarPreview = document.querySelector('.avatar-preview');

inputFile.addEventListener('change', handleUpload);

function handleUpload(e) {
  const inputTarget = e.target;
  const file = inputTarget.files[0];

  if (file) {
    const reader = new FileReader();
    reader.addEventListener('load', (e) => {
      const readerTarget = e.target;
      const img = document.createElement('img');
      img.src = readerTarget.result;
      img.classList.add('avatar-preview-img');
      avatarPreview.innerHTML = '';
      avatarPreview.appendChild(img);
    });
    reader.readAsDataURL(file);
  }
}

// TOAST NOTIFICATION
const toastTrigger = document.getElementById('toast-trigger');
const toastCard = document.getElementById('toast-card');

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastCard);
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show();
  });
}
