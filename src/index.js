import { CrossWord } from "./scripts/CrossWord";
import './sass/index.scss';

const generateInput = document.querySelector('.get-word-length__generate-input');

const crossWord = new CrossWord();

generateInput.addEventListener('click', () => crossWord.generateInputs());

window.addEventListener('keyup', () => {
    crossWord.getWordLength() > 0 ? generateInput.disabled = false : generateInput.disabled = true;
})
