export class CrossWord {

    getWordLength() {
        const value = document.querySelector('.get-word-length__input').value;
        if (!isNaN(value)) return value;
    }

    generateInputs() {
        const howManyInputs = this.getWordLength();
        console.log(howManyInputs)
    }
}