export class CrossWord {

    getWordLength() {
        const value = document.querySelector('.get-word-length__input').value;
        if (!isNaN(value)) return value;
    }

    generateInputs() {
        const howManyInputs = this.getWordLength();
        console.log(howManyInputs);
        const generateInput = document.querySelector('.generate-inputs-word');

        for (let i = 0; i < howManyInputs; i++) {
            const input = document.createElement('input');
            generateInput.appendChild(input);
        }
    }
}