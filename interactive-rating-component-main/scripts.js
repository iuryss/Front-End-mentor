const submitButton = document.querySelector('.submit-button');
const startBox = document.querySelector('.start-box');
const thankYouBox = document.querySelector('.final-box');
const input = document.querySelector('#input');
const ratingButtons = document.querySelectorAll('.rating-buttons button');
let rating = 0;
let selectedButton;

submitButton.addEventListener('click', () => {
    input.value = `You selected ${rating} out of 5`;
    startBox.style.display = 'none';
    thankYouBox.style.display = 'flex';
});

ratingButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (selectedButton) {
            selectedButton.classList.remove('active');
        }
        selectedButton = button;
        selectedButton.classList.add('active');
        rating = selectedButton.textContent;
    });
});
