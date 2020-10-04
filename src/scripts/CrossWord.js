export class CrossWord {

    getWordLength() {
        const value = document.querySelector('.get-word-length__input').value;
        if (!isNaN(value)) return value;
    }

    generateInputs(parent) {
        const howManyInputs = this.getWordLength();
        parent.textContent = '';
        const label = document.createElement('p');
        label.classList.add('generate-inputs-word__title');
        label.textContent = 'Wprowadź litery które już znasz';
        parent.appendChild(label);

        for (let i = 0; i < howManyInputs; i++) {
            const input = document.createElement('input');
            parent.appendChild(input);
        }
    }
}