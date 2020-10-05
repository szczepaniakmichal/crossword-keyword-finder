import { CrossWord } from "./scripts/CrossWord";
import './sass/index.scss';

const btnGenerateInput = document.querySelector('.get-word-length__generate-input');
const generateInput = document.querySelector('.generate-inputs-word');

const crossWord = new CrossWord();

btnGenerateInput.addEventListener('click', () => crossWord.generateInputs(generateInput));

btnGenerateInput.click(); //this is need for faster test

window.addEventListener('keyup', () => {
    crossWord.getWordLength() > 0 ? btnGenerateInput.disabled = false : btnGenerateInput.disabled = true;
})
