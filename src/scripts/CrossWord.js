export class CrossWord {

    getWordLength() {
        const value = document.querySelector('.get-word-length__input').value;
        if (!isNaN(value)) return value;
    }

    generateInputs(parent) {
        const howManyInputs = this.getWordLength();
        const title = parent.querySelector('.generate-inputs-word__title');
        title.style.display = 'block';
        const fields = parent.querySelector('.generate-inputs-word__field');
        fields.textContent = '';


        for (let i = 0; i < howManyInputs; i++) {
            const div = document.createElement('div');
            const label = document.createElement('label');
            const input = document.createElement('input');
            div.classList.add('generate-inputs-word__word');
            label.textContent = i + 1;
            div.appendChild(label);
            div.appendChild(input);
            fields.appendChild(div);
        }
    }
}