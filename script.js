const button = document.querySelector('.share-button');
const shareContainer = document.querySelector('.share-container');
const path = document.querySelector('path');

shareContainer.style.display = 'none';

button.addEventListener('click', function() {

    if(shareContainer.style.display == 'none') {
        shareContainer.style.display = 'block';
        button.style.backgroundColor = 'var(--grayish-blue)';
        path.style.fill = 'var(--container-color)';
    } else {
        shareContainer.style.display = 'none';
        button.style.backgroundColor = 'var(--primary-color)';
        path.style.fill = 'var(--dark-blue)';
    }
})