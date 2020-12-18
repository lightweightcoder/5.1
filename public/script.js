// get all paragraph elements
// 1st method
// const paragraphs = document.getElementsByTagName('P');
// 2nd method
const paragraphs = document.querySelectorAll('p');

for (let i = 0; i < paragraphs.length; i += 1) {
  paragraphs[i].addEventListener('click', (event) => {
    const hasClicked = event.currentTarget.classList.contains('change-background-color');
    if (hasClicked) {
      event.currentTarget.classList.remove('change-background-color');
    } else {
      event.currentTarget.classList.add('change-background-color');
    }
  });
}
